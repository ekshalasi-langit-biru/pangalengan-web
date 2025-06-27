import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CHECK_ICON = "/logo/checklist.png";
const BACKEND_URL = "http://localhost:8000/api/reset-password"; // ganti dengan endpoint PHP nanti ya bro!

const ForgotPass = () => {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    if (!password || !confirm) {
      setErrorMsg("Semua kolom harap untuk diisi!");
      return;
    }
    if (password !== confirm) {
      setErrorMsg("Password belum sesuai!");
      return;
    }
    setErrorMsg("");
    setLoading(true);

    try {
      // Kirim request ke backend
      const res = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // biasanya perlu token/email dari link reset, ini contoh misal cuma password aja. sisanya tlng sesuaiin aja ya pip!
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMsg(data.message || "Gagal reset password!");
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
    <div className="w-full max-w-xl flex items-center justify-center min-h-screen mt-[-20px]">
      <div className="w-full bg-graySuperLight p-10 rounded-2xl shadow-md flex flex-col items-center justify-center relative">
        <h3 className="text-2xl font-bold text-center mb-6">Reset Password</h3>
        <div className="w-full space-y-4">
          <input
            type="password"
            placeholder="Password Baru"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />
          <input
            type="password"
            placeholder="Konfirmasi Password Baru"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
            required
            disabled={loading}
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
              focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
              transition-all duration-150 ease-in-out"
          />
        </div>

        {errorMsg && (
            <div className="flex items-center w-full mt-4">
                <div className="flex-grow border-t border-red-500"></div>
                    <span className="mx-3 text-xs text-center text-red-500 font-medium whitespace-nowrap">
                    {errorMsg}
                    </span>
                <div className="flex-grow border-t border-red-500"></div>
            </div>
        )}

        <button
          onClick={handleReset}
          disabled={loading}
          className={`mt-8 w-full text-center py-3 rounded-md shadow-md transition text-sm font-medium
            ${loading ? "bg-gray-400 text-gray-300 cursor-not-allowed" : "bg-black text-white hover:bg-gray-900 active:shadow-none"}`}
        >
          {loading ? "Memproses..." : "Reset Password"}
        </button>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-2xl shadow-xl flex flex-col items-center px-8 py-10 max-w-xs">
              <img src={CHECK_ICON} alt="Ceklis" className="w-14 h-14 mb-3" />
              <p className="text-lg font-bold text-black mb-2">Password berhasil direset!</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPass;