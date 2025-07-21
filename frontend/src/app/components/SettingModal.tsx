'use client'
import { useModal } from '../context/ModalContext';
import { useTheme } from '../context/ThemeContext';
export default function SettingModal() {
  const {toggleTheme, theme} = useTheme();
  const { showSettingsModal } = useModal();
  if (!showSettingsModal) return null;
  return (
    <div className='backdrop-blur-lg bg-[rgba(85,83,63,0.3)] p-6 text-whitebg-transparent shadow-lg w-screen h-screen z-55 absolute rounded-xl transform transition-all duration-500 ease-in-out space-y-4 dark:text-white'>
    <div className='backdrop-blur-lg bg-[rgba(85,83,63,0.3)] p-6 text-whitebg-transparent shadow-lg lg:w-[25vw] lg:h-[38vh] z-5 absolute lg:bottom-70 lg:left-130 rounded-xl transform transition-all duration-1000 ease-in-out space-y-4 dark:text-white'>
        <h2 className='text-lg font-bold'>Settings</h2>
        <div>
        <h4 className='font-semibold'>Theme</h4>
        <p className='text-sm'>Choose between a light and dark theme</p>
        <div className='space-x-3 mt-1'>
        <button
    className={`w-8 h-8 rounded-lg border-2 ${
      theme === 'light' ? 'border-blue-500' : 'border-transparent'
    } bg-white`}
    onClick={() => toggleTheme('light')}
  />
  <button
    className={`w-8 h-8 rounded-lg border-2 ${
      theme === 'dark' ? 'border-blue-500' : 'border-transparent'
    } bg-black`}
    onClick={() => toggleTheme('dark')}
  />
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
</div>
  )
}