const CarouselSlide = ({ slide, videoRef }) => {
    return (
      <div className="w-full h-[500px] relative rounded-lg overflow-hidden">
        {slide.type === "image" ? (
            <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover rounded-xl"
            />
            ) : (
            <video
                ref={videoRef}
                src={slide.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover rounded-xl"
            />
        )}
  
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="bg-black/50 text-white text-center py-2 px-4 text-sm">
            {slide.caption}
          </div>
        </div>
      </div>
    )
  }
  
  export default CarouselSlide  