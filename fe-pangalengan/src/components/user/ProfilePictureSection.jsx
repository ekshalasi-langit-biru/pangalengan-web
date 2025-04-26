import useAuth from '../../context/useAuth'

const ProfilePictureSection = () => {
  const { user } = useAuth()

  return (
    <section className="flex flex-col items-center justify-center text-center pt-2 pb-8">
      <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-4">
        <img
            src={user?.photoUrl || '/profile/defaultProfile.png'}
            alt="Profile"
            className="object-cover w-full h-full"
        />
      </div>

      <h2 className="text-xl font-semibold">
        Halo, {user?.name || 'User'}
      </h2>

      <p className="text-sm mt-1">
        Mari berkembang bersama dan dukung UMKM lokal.{' '}
        {/* <a href="#" className="text-blue-500 hover:underline">
          Pelajari lebih lanjut
        </a> */}
      </p>
    </section>
  )
}

export default ProfilePictureSection