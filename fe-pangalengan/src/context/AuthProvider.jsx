import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'

const useDummy = true //untuk test tampilan header ketika sebelum/sesudah login

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   const savedUser = JSON.parse(localStorage.getItem('user'))
  //   if (savedUser) setUser(savedUser)
  // }, [])

  // TEST LOGIN DUMMY UNTUK SEMUA FILE
  useEffect(() => {
    localStorage.removeItem('user')
    const savedUser = JSON.parse(localStorage.getItem('user'))
  
    if (savedUser) {
      setUser(savedUser)
    } else if (useDummy) {
      const dummyUser = {
        name: 'Valerie Agatha',
        role: 'user',
        email: 'lerie_agaaga@user.com',
        gender: 'Perempuan',
        address: 'Jl. Pengalengan Raya',
        photoUrl: '/profile/defaultProfile.png',
      }
      localStorage.setItem('user', JSON.stringify(dummyUser))
      setUser(dummyUser)
    }
  
    setLoading(false)
  }, [])  

  const login = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider