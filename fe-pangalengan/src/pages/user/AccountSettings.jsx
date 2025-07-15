import { useLocation, useNavigate } from 'react-router-dom'
import SettingsHeader from '../../components/user/SettingsHeader'
import SidebarSettingMenu from '../../components/user/SidebarSettingMenu'
import ProfilePictureSection from '../../components/user/ProfilePictureSection'
import AccountBasicInfo from '../../components/user/AccountBasicInfo'
import MyStore from '../../components/user/MyStore'

const AccountSettings = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const tab = location.pathname.split('/')[2] || 'akun'

  const handleTabChange = (selectedTab) => {
    navigate(`/pengaturan/${selectedTab}`)
  }

  const renderContent = () => {
    switch (tab) {
      case 'akun':
        return (
          <>
            <ProfilePictureSection />
            <AccountBasicInfo />
          </>
        )
      case 'toko-saya':
        return <MyStore />
      default:
        return <p>Tab tidak ditemukan</p>
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SettingsHeader />
      <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6">
        <SidebarSettingMenu activeTab={tab} onTabChange={handleTabChange} />
        <div className="flex-1 space-y-1">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AccountSettings