import { useState } from "react";
import TabSwitcher from '../../components/common/TabSwitcher'
import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom";

const CHECK_ICON = "/logo/checklist.png";
const BACKEND_URL = "http://localhost:8000/api/register"; // ganti dengan endpoint PHP nanti ya bro!

const SignUp = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!nama || !email || !phone || !password) {
      setErrorMsg("Semua kolom harap untuk diisi!");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, email, phone, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Registrasi gagal, cek kembali data Anda!");
      } else {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate("/sign-in");
        }, 2000);
      }
    } catch (err) {
      setErrorMsg("Gagal terhubung ke server. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl flex items-center justify-center min-h-screen">
      <motion.div
        key="signup"
        className="w-full bg-graySuperLight p-10 rounded-2xl shadow-md flex flex-col items-center justify-center mt-[-40px]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.h1
          key="signup-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Daftar Akun
        </motion.h1>

        <motion.div layout className="mb-6">
          <TabSwitcher />
        </motion.div>

        <form className="w-full space-y-4" onSubmit={handleSignUp} autoComplete="off">
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={nama}
            onChange={e => setNama(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />
          <input
            type="tel"
            placeholder="No. Telp"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />

          {errorMsg && (
            <div className="flex items-center w-full my-2">
              <div className="flex-grow border-t border-red-500"></div>
              <span className="mx-3 text-xs text-center text-red-500 font-medium whitespace-nowrap">
                {errorMsg}
              </span>
              <div className="flex-grow border-t border-red-500"></div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`mt-3 w-full bg-black text-white py-3 rounded-md shadow-md transition text-sm font-medium
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-900 active:shadow-none"}`}
          >
            {loading ? "Memproses..." : "Buat Akun"}
          </button>
        </form>

        <button className="mt-6 w-full bg-white border py-3 rounded-md shadow-md hover:bg-grayExtraLight transition text-sm font-medium flex items-center justify-center gap-2">
          <img
            src="/logo/googleIcon.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Mendaftar dengan Google
        </button>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center px-8 py-10 max-w-xs">
              <img src={CHECK_ICON} alt="Ceklis" className="w-14 h-14 mb-3" />
              <p className="text-lg font-bold text-black mb-2">Akun berhasil dibuat!</p>
            </div>
          </div>
        )}

      </motion.div>
    </div>
  );
};

export default SignUp;