'use client'

import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface props
{
  title:string,
  children?:ReactNode,
  extraThick?:boolean,
  subtitle?:string
}

export default function MyBlock({title,children='',extraThick=false,subtitle}:props) 
{
  const styles = extraThick ? 'w-[60rem] mx-[auto] max-w-[100%]' :''
  const router = useRouter()

  return (
    <div className={`flex-1 ${styles}`}>
      <button
       onClick={()=>router.back()}
       className='hover:underline text-[1.2rem] text-blue-400 mb-[1rem]'
       >
        {'< Regresar'}
      </button>
      <strong className="block capitalize Montserrat text-[#000] text-3xl font-black">{title}</strong>
      <span className='text-[1.3rem] font-medium'>{subtitle}</span>
      <section className='mt-[1.5rem]' >{children}</section>
    </div>
  );
}
