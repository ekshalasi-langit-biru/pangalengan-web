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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63308.94378720305!2d107.5263614093533!3d-7.209814143481008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e129a5c365e9%3A0xc2124df7cfc8ec92!2sWarnasari%2C%20Kec.%20Pangalengan%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1720847069241!5m2!1sid!2sid"
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