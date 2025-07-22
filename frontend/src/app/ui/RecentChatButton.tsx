import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'

export default function RecentChats() {
  return (
    <div className='flex w-[60vw] lg:w-[30vw] h-7 items-center mt-7'>
        <div className='w-12 h-12 bg-blue-500 rounded-bl-lg rounded-tl-lg flex justify-center items-center'><AiOutlineMessage className='text-xl text-white' /></div>
          <h5 className='bg-gray-200 h-12 w-42 max-w-64 rounded-tr-lg rounded-br-lg px-4 flex items-center dark:bg-gray-700'>AI in Healthcare</h5>
    </div>
  )
}