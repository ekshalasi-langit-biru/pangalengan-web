import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const UserLayout = () => {
  const { pathname } = useLocation()
  const isSettingsPage = pathname.startsWith('/pengaturan')

  return (
    <div className={isSettingsPage ? 'bg-white' : ''}>
      {!isSettingsPage && <Header />}
      
      <main className={isSettingsPage ? 'min-h-screen' : 'min-h-screen px-4 py-8'}>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default UserLayout