import Image, { ImageProps } from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface props 
{
   src:string
   className?:string
}

export default function TableImg({className,src,...props}:props) 
{
  
  const twClassName = twMerge('rounded-[100%]',className)

  return (
    <Image src={src} height={40} width={40} alt='img' className={twClassName}/>
  )
}
