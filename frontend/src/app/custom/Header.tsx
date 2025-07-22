'use client'
import React from 'react'
import { useModal } from '../context/ModalContext'
import { AiOutlineAlignRight } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
import { useSidebar } from '../context/SidebarContext';

function Header() {
  const {toggleModal} = useModal();
  const {toggleSidebar} = useSidebar();
  return (
    <div className='w-screen h-16 bg-slate-50 border-b flex justify-between items-center px-3 border-b-[#e7edf4] dark:bg-gray-700 lg:px-10 dark:text-white'>
        <div className='flex items-center gap-2 lg:gap-8'>
        <svg className='h-10' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h1 className='text-[#0d141c] font-bold leading-tight tracking-[-0.015em] text-lg dark:text-white'>Ai Chat</h1>
        </div>

        <div className='flex gap-8 items-center'>
          <div className='flex gap-4 items-center'>
          <button onClick={(toggleModal)}
              className="flex w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#e7edf4] text-[#0d141c] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
            >
              <div className="text-[#0d141c]" data-icon="Gear" data-size="20px" data-weight="regular" >
              <IoSettingsOutline className='text-xl' />
              </div>
            </button>
              <div className='bg-blue-500 rounded-full w-10 h-10'></div>
          </div>
              <AiOutlineAlignRight className='text-2xl lg:hidden cursor-pointer' onClick={toggleSidebar} aria-label='Toggle Sidebar'/>
        </div>
    </div>
  )
}

export default Header