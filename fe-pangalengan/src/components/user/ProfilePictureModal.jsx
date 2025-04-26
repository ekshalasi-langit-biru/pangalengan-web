import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiTrash2, FiEdit2 } from 'react-icons/fi'
import { useRef } from 'react'

const ProfilePictureModal = ({ isOpen, onClose, onUpload, onDelete, photoUrl }) => {
  const fileInputRef = useRef()

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        onUpload(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl w-full max-w-md mx-4 p-6 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Warnasari</h2>
              <button onClick={onClose}>
                <FiX size={20} />
              </button>
            </div>

            <div className="text-center space-y-3">
              <p className="font-semibold">Profile Picture</p>
              <p className="text-sm text-gray-500">
                Foto membantu orang mengenali Anda dan memberi tahu Anda saat Anda masuk ke akun Anda.
              </p>

                <div className="w-32 h-32 rounded-full bg-gray-100 mx-auto overflow-hidden flex items-center justify-center">
                    <img
                        src={photoUrl || '/profile/defaultProfile.png'}
                        alt="Profile"
                        className="object-cover w-full h-full"
                    />
                </div>

              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm"
                >
                  <FiEdit2 />
                  Ubah
                </button>
                <button
                  onClick={onDelete}
                  className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm text-red-500"
                >
                  <FiTrash2 />
                  Hapus
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProfilePictureModal