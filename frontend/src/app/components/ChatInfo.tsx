import React, { useState } from 'react'
import RecentChatButton from '../ui/RecentChatButton'
import { RiSendPlaneLine } from 'react-icons/ri'
import { BiMessageSquareEdit } from 'react-icons/bi';
import { sendMsgToBackend } from '../api/chat';
import { useChat } from '../context/ChatContext';
import ChatInput from './ChatInput';

export default function ChatInfo() {

  return (
    <div className='w-[30vw] h-full space-y-8 dark:bg-gray-900 dark:text-white py-7 pl-4'>
        <h2 className='text-xl font-semibold py-2 px-4 rounded-lg w-1/2 transition duration-300 ease-in-out flex items-center cursor-pointer gap-2 hover:bg-gray-100 dark:hover:bg-gray-700'>New Chat <BiMessageSquareEdit className='text-blue-500' /></h2>
        <ChatInput />
        <div className='h-full space-y-10'>
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
