import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default UserLayout