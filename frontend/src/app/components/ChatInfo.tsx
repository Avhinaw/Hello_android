import React, { useState } from 'react'
import RecentChatButton from '../ui/RecentChatButton'
import { RiSendPlaneLine } from 'react-icons/ri'
import { BiMessageSquareEdit } from 'react-icons/bi';
export default function ChatInfo() {
  const [question, setQuestion] = useState("");
  return (
    <div className='w-[30vw] h-full space-y-8 dark:bg-gray-900 dark:text-white py-7 pl-4'>
        <h2 className='text-xl font-semibold py-2 px-4 rounded-lg w-1/2 transition duration-300 ease-in-out flex items-center cursor-pointer gap-2 hover:bg-gray-100 dark:hover:bg-gray-700'>New Chat <BiMessageSquareEdit className='text-blue-500' /></h2>
        <div className='border rounded-xl border-[#e7edf4] realtive w-[26.4vw] max-w-[30vw] min-h-[10vh] max-h-[50vh] relative'>
        <textarea placeholder='You ask we answer' className="py-2 px-4 outline-none scroll-smooth resize-none w-[24vw] max-w-[32vw] min-h-[18vh] max-h-[50vh]" value={question} onChange={(e) => setQuestion(e.target.value)}/>
        <RiSendPlaneLine className='absolute text-blue-500 cursor-pointer text-xl bottom-[16%] right-4 hover:scale-110 transition-all duration-300 ease-in-out' />
        </div>
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
