import { FiShield } from 'react-icons/fi'

const menuItems = [
  { id: 'account', label: 'Akun dan Keamanan', icon: <FiShield /> },
]

const SidebarSettingMenu = ({ activeTab, onTabChange }) => {
  return (
    <aside className="w-full sm:w-64 space-y-2">
      {menuItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onTabChange(item.id)}
          className={`flex items-center w-full px-4 py-3 rounded-md text-sm font-medium transition-all
            ${
              activeTab === item.id
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          <span className="mr-3 text-lg">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </aside>
  )
}

export default SidebarSettingMenu