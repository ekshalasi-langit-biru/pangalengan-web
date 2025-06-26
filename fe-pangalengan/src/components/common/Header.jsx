import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiHeart, FiUser, FiSearch } from "react-icons/fi";
import useAuth from "../../context/useAuth";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isScrolled;
};

const MyHeartIcon = () => {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const heartStyle = {
    fill: location.pathname === "/liked-products" ? "red" : "none",
    stroke: location.pathname === "/liked-products" ? "red" : "black",
  };

  return (
    <FiHeart className="w-5 h-5" style={heartStyle} onClick={handleClick} />
  );
};

const Header = () => {
  const { user, logout } = useAuth();
  const isScrolled = useScroll();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header
      className={`sticky top-0 z-[99] flex items-center justify-between px-6 py-4 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-xl" : "shadow-md"
      }`}
    >
      <Link to="/" className="ml-10 text-xl font-bold text-black">
        Warnasari
      </Link>

      <nav className="flex ml-[-14vw] gap-[5vw] text-sm font-medium text-gray-800">
        {[
          { to: '/', label: 'Beranda' },
          { to: '/blog', label: 'Blog' },
          { to: '/tentang', label: 'Tentang' },
          { to: '/katalog', label: 'Katalog' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="relative after:content-[''] after:block after:h-[2px] after:bg-black after:scale-x-0 after:transition-transform after:duration-300 after:origin-center hover:after:scale-x-100"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-[3vw]">
        <div className="relative">
          <input
            type="text"
            placeholder="Cari yang kamu inginkan"
            className="pl-4 pr-24 py-2 bg-gray-100 text-sm rounded-full focus:outline-none placeholder-gray-500"
          />
          <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600" />
        </div>

        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/liked-products">
              <MyHeartIcon className="w-5 h-5 text-black" />
            </Link>
            <Link to="/settings">
              <FiUser className="w-5 h-5 text-black" />
            </Link>
          </div>
        ) : (
          <div className="flex space-x-1">
            <button
              onClick={() => {
                if (pathname !== "/sign-in") navigate("/sign-in");
              }}
              className="bg-black text-white font-semibold text-sm px-6 py-2 rounded-md shadow-md hover:bg-white hover:text-black hover:underline transition"
            >
              Masuk
            </button>
            <Link
              to="/sign-up"
              className="bg-black text-white font-semibold text-sm px-6 py-2 rounded-md shadow-md hover:bg-white hover:text-black hover:underline transition"
            >
              Daftar
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;