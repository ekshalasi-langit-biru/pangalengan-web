import BreadCrumbs from "../../components/common/BreadCrumbs";
import VisionMission from "../../components/user/VisionMission";
import OrganizationStructure from "../../components/user/OrganizationStructure";
import VillageLocation from "../../components/user/VillageLocation";

const AboutPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      
      <section className="mb-8">
        <BreadCrumbs paths={["Beranda", "Tentang"]} />
      </section>

      <section className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-6">Desa Warnasari</h1>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Pangalengan menyimpan kisah indah tentang semangat dan kerja keras. Di setiap sudutnya, ada petani yang menanam harapan di ladang, pengrajin yang menciptakan keindahan dengan tangan terampil, dan pelaku UMKM yang menghadirkan produk berkualitas dari hasil bumi dan tradisi lokal. Semua ini lahir dari kearifan yang diwariskan turun-temurun, mencerminkan jiwa masyarakat yang penuh cinta pada tanahnya.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Setiap produk UMKM Pangalengan bukan sekadar barang, tetapi juga cerita tentang perjuangan dan kebanggaan lokal. Dengan mendukung UMKM, kita tak hanya membantu roda ekonomi terus berputar, tetapi juga merawat warisan budaya yang begitu berharga. Mari bersama-sama berkontribusi untuk memajukan UMKM Pangalengan dan menjaga semangat kearifan lokal tetap hidup!.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/villageProfile/aboutProfile.png"
            alt="Pangalengan Landscape"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </div>

      </section>

      <hr className="border-t border-gray-400 mt-20" />

      <section className="max-w-screen-xl mx-auto px-6">
        <VisionMission />
        <hr className="border-t border-gray-400" />
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <OrganizationStructure />
        <hr className="border-t border-gray-400" />
      </section>

      <section className="max-w-screen-xl mx-auto px-6">
        <VillageLocation />
      </section>
      
    </div>
  );
};

export default AboutPage;