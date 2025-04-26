import { useState } from 'react'
import SettingsHeader from '../../components/user/SettingsHeader'
import SidebarSettingMenu from '../../components/user/SidebarSettingMenu'
import ProfilePictureSection from '../../components/user/ProfilePictureSection'
import AccountBasicInfo from '../../components/user/AccountBasicInfo'

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState('account')

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <>
            <ProfilePictureSection />
            <AccountBasicInfo />
          </>
        )
      case 'preference':
        return <div className="text-center py-10">Preferensi (coming soon)</div>
      case 'privacy':
        return <div className="text-center py-10">Privasi & Izin (coming soon)</div>
      case 'history':
        return <div className="text-center py-10">Histori & Statistik (coming soon)</div>
      case 'support':
        return <div className="text-center py-10">Bantuan & Dukungan (coming soon)</div>
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <SettingsHeader />

      <div className="max-w-screen-xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-6">
        <SidebarSettingMenu
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="flex-1 space-y-1">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default AccountSettings