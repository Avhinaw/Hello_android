'use client'
import React from 'react'
import ChatInterface from './components/ChatInterface'
import ChatInfo from './components/ChatInfo'
import SettingModal from './components/SettingModal'

function page() {
  return (
    <div className='flex h-[91.5vh] overflow-hidden w-screen relative dark:bg-gray-900'>
      <ChatInterface />
      <SettingModal />
      <div className='lg:block hidden'>
      <ChatInfo />
      </div>
    </div>
  )
}

export default page;