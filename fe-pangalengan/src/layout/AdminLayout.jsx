import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <header className="mb-6 text-xl font-bold">Admin Dashboard</header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout