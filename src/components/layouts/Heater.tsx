'use client'
import MyButton from '@/components/uis/MyButton'

export const Header = () => {
  return (
    <header className='bg-slate-900'>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between'>
        <a className='flex title-font font-medium items-center mb-4 md:mb-0'>
          <span className='ml-3 text-xl'>File Upload</span>
        </a>
        <MyButton />
      </div>
    </header>
  )
}

export default Header
