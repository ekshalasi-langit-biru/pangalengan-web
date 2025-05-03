import HeroCarousel from '../../components/user/HeroCarousel'
import ProductCatalog from '../../components/user/ProductCatalog'
import CategoryExplorer from '../../components/user/CategoryExplorer'
import HeadlineNews from '../../components/user/HeadlineNews'

const HomePage = () => {
  return (
    <div className="w-full bg-white">
      <section className="w-full mb-10">
        <HeroCarousel />
      </section>

      <section className="max-w-screen-xl mx-auto px-6 pt-12 text-center">
        <h1 className="text-3xl font-bold mb-4">
          Selamat datang di E-Catalog Desa Warnasari
        </h1>
        <p className="text-gray-700 mb-6">
          Pangalengan menyimpan kisah indah tentang semangat dan kerja keras. Di
          setiap sudutnya, ada petani yang menanam harapan di ladang, pengrajin
          yang menciptakan keindahan dengan tangan terampil, dan pelaku UMKM
          yang menghadirkan produk berkualitas dari hasil bumi dan tradisi
          lokal. Semua ini lahir dari kearifan yang diwariskan turun-temurun,
          mencerminkan jiwa masyarakat yang penuh cinta pada tanahnya.
        </p>

        <hr className="border-t border-gray-400 mt-20" />
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <ProductCatalog />
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold mb-10 mt-20">
          Jelajahi Berdasarkan Kategori
        </h2>
        <CategoryExplorer />
        <hr className="border-t border-gray-400" />
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <HeadlineNews />
      </section>
    </div>
  );
}

export default HomePage