import React from 'react'

interface TitleProps {
  children: React.ReactNode
}

const BaseTitle = (props: TitleProps) => (
  <h1 className='mb-16 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl dark:text-white text-center'>
    {props.children}
  </h1>
)

export default BaseTitle
