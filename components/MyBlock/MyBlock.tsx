'use client'

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface props
{
  title:string,
  children?:ReactNode,
  extraThick?:boolean,
  subtitle?:string
  sideContent?:ReactNode
}

export default function MyBlock(props:props) 
{
  const 
  { 
    title, 
    children = "", 
    extraThick = false, 
    subtitle,
    sideContent
  } = props;

  const styles = extraThick ? 'w-[60rem] mx-[auto] max-w-[100%]' :''
  const router = useRouter()

  return (
    <div className={`flex-1 ${styles}`}>
      <button
        onClick={() => router.back()}
        className="hover:underline text-myGray mb-[1rem] flex items-center gap-[1rem] text-[14px] font-medium"
      >
        <FontAwesomeIcon icon={faChevronLeft} /> Regresar
      </button>
      <div className="flex">
        <strong className="block capitalize Montserrat text-[32px] font-black text-primary">
          {title}
        </strong>
        {
          sideContent
        }
      </div>
      <span className="text-[1.3rem] font-medium">{subtitle}</span>
      <section className="mt-[1.5rem]">{children}</section>
    </div>
  );
}
