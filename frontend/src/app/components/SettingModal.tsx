import React from 'react'
import { useModal } from '../context/ModalContext';

export default function SettingModal() {
    const { showSettingsModal } = useModal();
    if (!showSettingsModal) return null;
  return (
    <div className='backdrop-blur-lg bg-[rgba(85,83,63,0.3)] p-6 text-whitebg-transparent shadow-lg w-[25vw] h-[38vh] z-5 absolute top-20 left-80 rounded-xl transform transition-all duration-1000 ease-in-out space-y-4'>
        <h2 className='text-lg font-bold'>Settings</h2>
        <div>
        <h4 className='font-semibold'>Theme</h4>
        <p className='text-sm'>Choose between a light and dark theme</p>
        <div className='space-x-3 mt-1'>
            <button className='bg-white cursor-pointer w-7 h-7 rounded-lg'></button>
            <button className='bg-black cursor-pointer w-7 h-7 rounded-lg'></button>
        </div>
        </div>
        <div>
        <h4 className='font-semibold'>Enter</h4>
        <p className='text-sm'>Chosse between pressing enter to send or next line</p>
        <div className='space-x-3 mt-2'>
            <button className='bg-blue-500 text-white rounded-lg px-3 py-1 text-sm'>Send</button>
            <button className='bg-blue-500 text-white rounded-lg px-3 py-1 text-sm'>Next</button>
        </div>
        </div>
    </div>
  )
}