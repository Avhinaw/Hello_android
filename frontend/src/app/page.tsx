'use client'
import React from 'react'
import ChatInterface from './components/ChatInterface'
import ChatInfo from './components/ChatInfo'
import SettingModal from './components/SettingModal'
import { useSidebar } from './context/SidebarContext'

function Page() {
  const {isSidebarOpen, closeSidebar} = useSidebar();
  return (
    <div className='flex h-[91.5vh] overflow-hidden w-screen relative dark:bg-gray-900'>
      <ChatInterface />
      <SettingModal />
      {isSidebarOpen && (
        <div className='backdrop-blur-lg bg-[rgba(85,83,63,0.3)] p-6 text-whitebg-transparent shadow-lg w-screen h-screen z-55 absolute rounded-xl transform transition-all duration-500 ease-in-out space-y-4 dark:text-white' onClick={closeSidebar}></div>
      )}
      <div className={`${isSidebarOpen ? "block": "hidden"} lg:block transition-all duration-500 ease-in-out z-60 absolute right-0 w-[70vw]  lg:w-[10vw] lg:relative`}>
      <ChatInfo />
      </div>
    </div>
  )
}

export default Page;