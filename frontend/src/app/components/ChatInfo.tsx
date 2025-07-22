import React from 'react'
import RecentChatButton from '../ui/RecentChatButton'
import { BiMessageSquareEdit } from 'react-icons/bi';
import ChatInput from './ChatInput';

export default function ChatInfo() {

  return (
    <div className='w-[80vw] lg:w-[30vw] bg-gray-100 h-screen space-y-8 dark:bg-gray-900 dark:text-white py-7 pl-4 z-40'>
        <h2 className='text-xl font-semibold py-2 lg:px-4 rounded-lg w-full lg:w-1/2 transition duration-300 ease-in-out flex items-center cursor-pointer gap-2 hover:bg-gray-100 dark:hover:bg-gray-700'>New Chat <BiMessageSquareEdit className='text-blue-500' /></h2>
        <div className='hidden lg:block'>
        <ChatInput />
        </div>
        <div className='h-full space-y-8'>
            <h3 className='text-xl font-bold'>Recent Chats</h3>
            <RecentChatButton />
            <RecentChatButton />
            <RecentChatButton />
            <RecentChatButton />
            <RecentChatButton />
        </div>
    </div>
  )
}
