// components/profile/tab-navigation.tsx
'use client'

interface TabNavigationProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="relative z-10 mb-12">
      <div className="bg-gray-100/50 backdrop-blur-sm p-1.5 rounded-2xl inline-flex flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`relative px-6 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${activeTab === tab
                ? 'bg-white text-[#1E7B7C] shadow-lg shadow-[#1E7B7C]/10'
                : 'text-gray-500 hover:text-gray-700 hover:bg-white/50'
              }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1E7B7C] rounded-full" />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}