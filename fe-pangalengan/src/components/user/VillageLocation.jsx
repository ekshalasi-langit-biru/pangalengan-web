const VillageLocation = () => {
    return (
      <section className="max-w-screen-xl mx-auto px-4 mt-16 mb-20">
        <h2 className="flex flex-col items-center text-3xl font-bold mb-8">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                <span>LOKASI</span>
                <div className="w-16 h-[2px] bg-black mt-2" />
                </div>
                <img src="/logo/arrowIcon.svg" alt="Icon" className="w-4 h-4" />
            </div>
        </h2>
  
        <div className="flex justify-center">
          <iframe
            title="Lokasi Desa Warnasari"
            src="https://www.google.com/maps?q=Warnasari&output=embed"
            width="100%"
            height="400"
            className="rounded-lg shadow-md max-w-4xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    );
  };
  
export default VillageLocation;  