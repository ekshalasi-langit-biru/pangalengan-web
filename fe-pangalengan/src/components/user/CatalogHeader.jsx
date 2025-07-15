import { FiArrowLeft } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return isScrolled
}

const CatalogHeader = () => {
  const navigate = useNavigate()
  const isScrolled = useScroll()

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-md'
      }`}
    >
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/pengaturan/toko-saya')}
          className="text-xl text-gray-600 hover:text-black transition"
        >
          <FiArrowLeft />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Katalog</h1>
      </div>
      <Link 
        to="/"
        className="text-xl font-bold text-black"
      >
        Warnasari
      </Link>
    </header>
  )
}

export default CatalogHeader