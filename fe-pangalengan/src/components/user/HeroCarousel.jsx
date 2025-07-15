import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CarouselSlide from './CarouselSlide'

const slides = [
  {
    id: 1,
    type: 'image',
    src: '/villageProfile/cileuncaTour.jpg',
    caption: 'Wisata seru dan penuh warna di jantung Situ Cileunca.'
  },
  {
    id: 2,
    type: 'image',
    src: '/villageProfile/glampCileunca.jpg',
    caption: 'Tenda nyaman di tepi danau, untuk pengalaman glamping tak terlupakan.'
  },
  {
    id: 3,
    type: 'image',
    src: '/villageProfile/pinusLakeView.jpg',
    caption: 'Situ Cileunca – Panorama danau dengan latar hutan pinus yang memukau.'
  }
]

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const timeoutRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const currentSlide = slides[activeIndex]

    if (currentSlide.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0
      videoRef.current.play()
      videoRef.current.onended = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length)
      }
    } else {
      timeoutRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length)
      }, 5000)
    }

    return () => {
      clearTimeout(timeoutRef.current)
      if (videoRef.current) videoRef.current.pause()
    }
  }, [activeIndex])

  const handleManualNav = (dir) => {
    clearTimeout(timeoutRef.current)
    setActiveIndex((prev) =>
      dir === 'next'
        ? (prev + 1) % slides.length
        : (prev - 1 + slides.length) % slides.length
    )
  }

  const handleDotClick = (index) => {
    clearTimeout(timeoutRef.current)
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[activeIndex].id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CarouselSlide slide={slides[activeIndex]} videoRef={videoRef} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-6 mt-6">
        <button
          onClick={() => handleManualNav('prev')}
          className="text-black text-xl font-bold hover:scale-110 transition"
        >
          ‹
        </button>

        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all w-2.5 h-2.5 rounded-full ${
                idx === activeIndex
                  ? 'bg-black w-5'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => handleManualNav('next')}
          className="text-black text-xl font-bold hover:scale-110 transition"
        >
          ›
        </button>
      </div>
    </div>
  )
}

export default HeroCarousel