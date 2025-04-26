import { Link, useLocation, useNavigate } from 'react-router-dom'

const Footer = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <footer className="bg-black text-grayUltraLight text-sm pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="max-w-xs">
            <h3 className="font-semibold mb-2">Desa Warnasari</h3>
            <p className="leading-relaxed">
              Pangalengan,<br />
              Kec. Pangalengan,<br />
              Kab. Bandung – Jawa Barat,<br />
              Indonesia
            </p>
          </div>

          <div className="max-w-[220px]">
            <h3 className="font-semibold mb-2">Bantuan</h3>
            <p className="leading-relaxed">Alamat pengelola website / yang mengelola web</p>
            <p>Insight@gmail.com</p>
            <p>+628-123-456-789</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Akun</h3>
            <ul className="leading-relaxed space-y-1">
              <li><Link to="/profile" className="hover:underline">Akun Saya</Link></li>
              <div className="flex space-x-1">
                <button 
                  onClick={() => {
                    if (pathname !== '/sign-in') navigate('/sign-in')
                  }} 
                className="hover:underline">Masuk</button>
                <span>/</span>
                <Link to="/sign-up" className="hover:underline">Daftar</Link>
              </div>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Quick Link</h3>
            <ul className="leading-relaxed space-y-1">
              <li><Link to="/kebijakan" className="hover:underline">Kebijakan Privasi</Link></li>
              <li><Link to="/syarat" className="hover:underline">Persyaratan Pengguna</Link></li>
              <li><Link to="/faq" className="hover:underline">Pertanyaan yang sering diajukan (FAQ)</Link></li>
              <li><Link to="/kontak" className="hover:underline">Kontak</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
          &copy; Copyright Insight 2025. All right reserved
        </div>
      </div>
    </footer>
  )
}

export default Footer