import { Link } from 'react-router-dom'

// const dummyHeadlines = [
//   {
//     id: 1,
//     topic: 'POLITIC',
//     title: 'Problem Sekolah Rakyat: Anggaran, Tumpang Tindih Kebijakan, Hingga Stigma Kemiskinan',
//     author: 'Nabilila Azzahra',
//     date: '23 Maret 2025',
//     excerpt: 'Prabowo SUbianto membuka sekolah rakyat pada 2025/2026. Pemborosan dan tumpang-tindih dengann sekolah negeri.',
//     image: '/news/politicImage1.png',
//     path: '/news/1',
//   },
//   {
//     id: 2,
//     topic: 'FINANCE',
//     title: 'Daya Beli Masyarakat Lesu di Awal 2025: Deflasi, PHK Massal, dan Krisis Global Jadi Pemicu Utama',
//     author: 'Rehan Oktra Halim',
//     date: '25 Maret 2025',
//     excerpt: 'Deflasi di awal 2025 justru mencerminkan pelemahan daya beli masyarakat, bukan keberhasilan stabilisasi harga.',
//     image: '/news/financeImage.png',
//     path: '/news/2',
//   },
//   {
//     id: 3,
//     topic: 'POLITIC',
//     title: 'Tahu-tahu Dwifungsi Polri',
//     author: 'Kuswoyo',
//     date: '25 Maret 2025',
//     excerpt: 'Dwifungsi Polri memprovokasi tentara untuk meminta keistimewaan serupa. Polri harus mengerem ambisinya menguasai jabatan sipil.',
//     image: '/news/politicImage2.png',
//     path: '/news/3',
//   },
// ]

const HeadlineNews = ({ headlines = [] }) => {
  return (
    <section className="mt-16 mb-20">
      <h2 className="text-center text-2xl font-bold mb-10">Pangalengan’s Headlines</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-screen-xl mx-auto">
        {headlines.map((news) => (
          <div key={news.id} className="flex flex-col">
            <img
              src={news.image}
              alt={news.title}
              className="rounded-lg w-full h-56 object-cover mb-4"
            />
            <p className="text-purple-600 text-xl font-bold mb-2">{news.category}</p>
            <Link
              to={`/BlogPage/${news.id}`}
              className="text-black text-lg font-bold hover:underline mb-2"
            >
              {news.title}
            </Link>
            <p className="text-sm font-semibold mb-2">
              {news.author} • {new Date(news.postedAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
            <p className="text-secondary text-sm">
              {news.content.substring(0, 80)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeadlineNews;