import { Routes, Route, Navigate } from 'react-router-dom'
import useAuth from '../context/useAuth'

import HomePage from '../pages/user/HomePage'
import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'

import AuthLayout from '../layout/AuthLayout'
import UserLayout from '../layout/UserLayout'
// import AdminLayout from '../layout/AdminLayout'

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth()

  if (!user) return <Navigate to="/signin" />
  if (role && user.role !== role) return <Navigate to="/" />
  return children
}

const AppRoutes = () => {
  return (
    <Routes>
        {/* Halaman Umum (Home, Detail Produk) */}
        <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/e.g-detail-product" element={<ProductDetail />} /> */}
        </Route>

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Route>

        {/* User Pages (Perlu Login) */}
        {/* <Route
            path="/wishlist"
            element={
            <ProtectedRoute role="user">
                <UserLayout>
                <Wishlist />
                </UserLayout>
            </ProtectedRoute>
            }
        />
        <Route
            path="/profile"
            element={
            <ProtectedRoute role="user">
                <UserLayout>
                <Profile />
                </UserLayout>
            </ProtectedRoute>
            }
        /> */}

        {/* Admin Pages */}
        {/* <Route
            path="/admin/add-product"
            element={
            <ProtectedRoute role="admin">
                <AdminLayout>
                <AdminAddProduct />
                </AdminLayout>
            </ProtectedRoute>
            }
        /> */}
    </Routes>
  )
}

export default AppRoutes