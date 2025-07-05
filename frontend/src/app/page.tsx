'use client'
import React from 'react'
import ChatInterface from './components/ChatInterface'
import ChatInfo from './components/ChatInfo'
import SettingModal from './components/SettingModal'

function page() {
  return (
    <div className='flex h-[calc(100vh-7rem)] space-x-5 overflow-hidden w-screen mt-12 relative'>
      <ChatInterface />
      <SettingModal />
      <ChatInfo />
    </div>
  )
}

export default page;