import { useState } from "react";
import { motion } from 'framer-motion'
import { Link, useNavigate } from "react-router-dom";
import TabSwitcher from '../../components/common/TabSwitcher'

const BACKEND_URL = "http://localhost:8000/api/login"; // ganti dengan endpoint PHP nanti ya bro!

const SignIn = () => {
  const [identity, setIdentity] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!identity || !password) {
      setErrorMsg("Semua kolom harap untuk diisi!");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identity, password })
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Password atau username salah!");
      } else {
        navigate("/");
      }
    } catch (err) {
      setErrorMsg("Gagal terhubung ke server. Coba lagi nanti.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl flex items-center justify-center min-h-screen mt-[-20px]">
      <motion.div
        key="signin"
        className="w-full bg-graySuperLight p-10 rounded-2xl shadow-md flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <motion.h1
          key="signin-title"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Masuk Akun
        </motion.h1>

        <motion.div layout className="mb-6">
          <TabSwitcher />
        </motion.div>

        <form className="w-full space-y-4" onSubmit={handleSignIn} autoComplete="off">
          <input
            type="text"
            placeholder="Email atau No. Telp"
            value={identity}
            onChange={e => setIdentity(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />
          <input
            type="password"
            placeholder="Password"
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
            className={`mt-8 w-full bg-black text-white py-3 rounded-md shadow-md transition text-sm font-medium
              ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-gray-900 active:shadow-none"}`}
          >
            {loading ? "Memproses..." : "Masuk"}
          </button>
        </form>

        <div className="flex items-center w-full mt-6">
          <div className="flex-grow border-t border-gray-400"></div>
          <Link
            to="/forgot-pass"
            className="mx-3 text-xs text-gray-600 hover:text-black transition font-medium text-center whitespace-nowrap"
          >
            Lupa password?
          </Link>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;