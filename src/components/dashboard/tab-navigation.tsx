// components/dashboard/tab-navigation.tsx
'use client'

interface TabNavigationProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
  activeColor?: string
}

export function TabNavigation({ 
  tabs, 
  activeTab, 
  onTabChange,
  activeColor = 'text-[#1E7B7C]'
}: TabNavigationProps) {
  return (
    <div className="flex items-center gap-8 border-b border-gray-200 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`pb-4 text-sm font-bold transition-all relative ${
            activeTab === tab 
              ? `${activeColor}` 
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#1E7B7C] rounded-t-full`} />
          )}
        </button>
      ))}
    </div>
  )
}