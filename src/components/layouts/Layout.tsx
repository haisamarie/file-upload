import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-10'>
      {children}
    </main>
  )
}

export default Layout
