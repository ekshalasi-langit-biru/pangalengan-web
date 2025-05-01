import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const staffData = [
  { id: 1, name: "Ki AA Sugiharto .S.lp", position: "Kepala Desa Warnasari", image: "/regionalOfficial/headVillageProfile.png", whatsapp: "https://wa.me/6282123870889", instagram: "https://www.instagram.com/eunola_4/" },
  { id: 2, name: "Aep Komara", position: "Sekretaris Desa Warnasari", image: "/regionalOfficial/secretaryVillageProfile.png", whatsapp: "https://wa.me/6282123870889", instagram: "https://www.instagram.com/rakensadwifa/" },
  { id: 3, name: "Tati Witarsih", position: "Ketua BPD Desa Warnasari", image: "/regionalOfficial/chairmanBPDProfile.png", whatsapp: "https://wa.me/6282123870889", instagram: "https://www.instagram.com/dheaaisyyy_/" },
  { id: 4, name: "Tatang Komara", position: "Kepala LPMD Desa Warnasari", image: "/regionalOfficial/chairmanLPMDProfile.png", whatsapp: "https://wa.me/6282123870889", instagram: "https://www.instagram.com/umarzk_/" },
];

const OrganizationStructure = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleManualNav = (dir) => {
    if (!swiperRef.current) return;
    if (dir === "next") swiperRef.current.slideNext();
    else swiperRef.current.slidePrev();
  };

  const handleDotClick = (index) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideTo(index);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 mt-16 mb-20">
      <h2 className="flex flex-col items-center text-3xl font-bold text-center mb-12">
        STRUKTUR ORGANISASI
        <div className="w-[25%] h-[2px] bg-black mt-2" />
      </h2>

      <div className="relative">
        <Swiper
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="pb-12"
        >
          {staffData.map((staff, idx) => (
            <SwiperSlide
                key={staff.id}
                className="w-64 flex flex-col items-center transition-transform duration-300"
            >
                <div
                className={`w-full h-80 bg-gray-100 rounded-lg overflow-hidden shadow-md flex items-center justify-center
                    ${
                    idx === activeIndex
                        ? "scale-105"
                        : "scale-90 opacity-80"
                    }
                    transition-all duration-300
                `}
                >
                <img src={staff.image} alt={staff.name} className="object-cover w-full h-full" />
                </div>
            
                <div className="mt-4 text-center">
                <h3 className="font-bold">{staff.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{staff.position}</p>
            
                <div className="flex justify-center items-center gap-4 mt-2">
                    {staff.whatsapp && (
                        <a href={staff.whatsapp} target="_blank" rel="noopener noreferrer">
                        <img src="/logo/whatsappIcon.svg" alt="WhatsApp" className="w-5 h-5 hover:scale-110 transition" />
                        </a>
                    )}
                    
                    {staff.instagram && (
                        <a href={staff.instagram} target="_blank" rel="noopener noreferrer">
                        <img src="/logo/instagramIcon.svg" alt="Instagram" className="w-5 h-5 hover:scale-110 transition" />
                        </a>
                    )}
                </div>
            
                </div>
            </SwiperSlide>          
          ))}
        </Swiper>

        <div className="flex justify-center items-center gap-6 mt-6">
          <button
            onClick={() => handleManualNav("prev")}
            className="text-black text-xl font-bold hover:scale-110 transition"
          >
            ‹
          </button>

          <div className="flex items-center gap-3">
            {staffData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`transition-all w-2.5 h-2.5 rounded-full ${
                  idx === activeIndex ? "bg-black w-5" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => handleManualNav("next")}
            className="text-black text-xl font-bold hover:scale-110 transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;