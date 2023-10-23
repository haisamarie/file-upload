'use client'
import React from 'react'
import MyModal from '@/components/uis/MyModal'
import BaseTitle from '@/components/uis/BaseTitle'
import User from '@/components/features/profile/user'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 max-w-5xl w-full'>
        <BaseTitle>Profile</BaseTitle>
        <div className='flex items-center justify-center gap-5'>
          <User />
          <MyModal />
        </div>
      </div>
    </main>
  )
}
