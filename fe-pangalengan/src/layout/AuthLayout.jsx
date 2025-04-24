import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const AuthLayout = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow flex items-center justify-center px-4">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  )
}

export default AuthLayout