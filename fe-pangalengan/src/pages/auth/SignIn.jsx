import TabSwitcher from '../../components/common/TabSwitcher'
import { motion } from 'framer-motion'

const SignIn = () => {
  return (
    <div className="w-full max-w-xl flex items-center justify-center min-h-screen">
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

        <div className="w-full space-y-4">
          <input
            type="text"
            placeholder="Email atau No. Telp"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
             focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
             transition-all duration-150 ease-in-out"
          />
          <input
            type="password"
            placeholder="Kata Sandi"
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-inner bg-white text-sm 
             focus:outline-none placeholder-gray-800 focus:ring-1 focus:ring-grayMedium focus:ring-offset-0 
             transition-all duration-150 ease-in-out"
          />
        </div>

        <button className="mt-8 w-full bg-black text-white py-3 rounded-md shadow-md hover:bg-gray-900 active:shadow-none transition text-sm font-medium">
          Masuk
        </button> 
      </motion.div>
    </div>
  )
}

export default SignIn