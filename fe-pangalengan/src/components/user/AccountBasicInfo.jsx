import { useState } from 'react'
import useAuth from '../../context/useAuth'
import ProfilePictureModal from './ProfilePictureModal'

const AccountBasicInfo = () => {
  const { user, login } = useAuth()

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    gender: user?.gender || '',
    address: user?.address || '',
    photoUrl: user?.photoUrl || '',
  })

  const [showModal, setShowModal] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      gender: formData.gender,
      address: formData.address,
      photoUrl: formData.photoUrl,
    }
    login(updatedUser)
    alert('Perubahan berhasil disimpan!')
  }

  const handleImageUpload = (img) => {
    const updatedUser = {
      ...user,
      photoUrl: img,
    }
    login(updatedUser)
    setFormData((prev) => ({ ...prev, photoUrl: img }))
    setShowModal(false)
  }
  
  const handleImageDelete = () => {
    const updatedUser = {
      ...user,
      photoUrl: '',
    }
    login(updatedUser)
    setFormData((prev) => ({ ...prev, photoUrl: '' }))
    setShowModal(false)
  }  

  return (
    <section className="bg-white rounded-xl shadow-md px-6 py-5 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Informasi Dasar</h3>

      <div
        onClick={() => setShowModal(true)}
        className="cursor-pointer border border-gray-300 rounded-md p-4 flex items-center gap-4 hover:bg-gray-50 transition"
      >
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            <img
                src={formData.photoUrl || "/profile/defaultProfile.png"}
                alt="Profile"
                className="w-full h-full object-contain"
            />
        </div>
        <div>
          <p className="text-sm font-medium text-gray-800">Foto Profil</p>
          <p className="text-xs text-gray-500">Klik untuk mengubah foto profil Anda.</p>
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-500">Nama Lengkap</p>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
      </div>

      <div>
        <p className="text-sm text-gray-500">Email / No. Telp</p>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
      </div>

      <div>
        <p className="text-sm text-gray-500">Jenis Kelamin</p>
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
      </div>

      <div>
        <p className="text-sm text-gray-500">Alamat</p>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
        />
      </div>

      <div className="pt-4 flex justify-center">
        <button
          onClick={handleSave}
          className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Simpan
        </button>
      </div>

      <ProfilePictureModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onUpload={handleImageUpload}
        onDelete={handleImageDelete}
        photoUrl={formData.photoUrl}
      />
    </section>
  )
}

export default AccountBasicInfo