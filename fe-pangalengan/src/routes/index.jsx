import { Routes, Route, Navigate } from 'react-router-dom'
import useAuth from '../context/useAuth'

import SignIn from '../pages/auth/SignIn'
import SignUp from '../pages/auth/SignUp'
import ForgotPass from '../pages/auth/ForgotPass'

import HomePage from '../pages/user/HomePage'
import AboutPage from '../pages/user/AboutPage'
import AccountSettings from '../pages/user/AccountSettings'
import BlogsPage from '../pages/user/BlogsPage'
import BlogPage from '../pages/user/BlogPage'
import BlogsPageCategory from '../pages/user/BlogsPageCategory'
import KatalogPage from '../pages/user/KatalogPage'
import LikedProducts from '../pages/user/LikedProducts'
import DetailedProduct from '../pages/user/DetailedProduct'
import CategoryProducts from '../pages/user/CategoryProducts'
import AddProduct from '../pages/user/AddProduct'

import AuthLayout from '../layout/AuthLayout'
import UserLayout from '../layout/UserLayout'
// import AdminLayout from '../layout/AdminLayout'

const ProtectedRoute = ({ children, role }) => {
    const { user, loading } = useAuth()
  
    if (loading) return null
  
    if (!user) return <Navigate to="/sign-in" />
    if (role && user.role !== role) return <Navigate to="/" />
    return children
}

const AppRoutes = () => {
  return (
    <Routes>
        {/* General Pages (Home, Detail Produk, etc) */}
        <Route element={<UserLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/blog" element={<BlogsPage />} />
            <Route path="/BlogPage/:id" element={<BlogPage/>} />
            <Route path="/Blogs/:category" element={<BlogsPageCategory/>} />
            <Route path="/katalog" element={<KatalogPage />} />
            <Route path="/katalog/:type" element={<CategoryProducts/>} />
            <Route path="/produk-disukai" element={<LikedProducts />} />
            <Route path="/produk/:id" element={<DetailedProduct/>} />
        </Route>

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/forgot-pass" element={<ForgotPass />} />
        </Route>

        {/* User Protected Pages */}
        <Route
            element={
            <ProtectedRoute role="user">
                <UserLayout />
            </ProtectedRoute>
            }
        >
            <Route path="/pengaturan" element={<Navigate to="/pengaturan/akun" />} />
            <Route path="/pengaturan/*" element={<AccountSettings />} />
            <Route path="/pengaturan/tambah-katalog" element={<AddProduct />} />
        </Route>

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