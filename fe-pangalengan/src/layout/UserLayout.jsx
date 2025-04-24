import { Outlet } from 'react-router-dom'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

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