import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const TabSwitcher = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const isSignIn = pathname === '/sign-in'

  const handleNavigate = (path) => {
    if (pathname !== path) {
      navigate(path)
    }
  }

  return (
    <div className="relative flex w-[320px] h-10 border rounded-full overflow-hidden bg-white shadow-inner">
      <motion.div
        layout
        initial={false}
        animate={{ x: isSignIn ? '160px' : '0px' }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="absolute top-0 left-0 h-full w-1/2 bg-black rounded-full z-0"
      />

      <div className="relative z-10 flex w-full">
        <button
          onClick={() => handleNavigate('/sign-up')}
          className={`w-1/2 text-sm font-semibold transition-colors duration-300 ${
            isSignIn ? 'text-black' : 'text-white'
          }`}
        >
          Daftar Akun
        </button>
        <button
          onClick={() => handleNavigate('/sign-in')}
          className={`w-1/2 text-sm font-semibold transition-colors duration-300 ${
            isSignIn ? 'text-white' : 'text-black'
          }`}
        >
          Masuk Akun
        </button>
      </div>
    </div>
  )
}

export default TabSwitcher