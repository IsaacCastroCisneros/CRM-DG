import React from 'react'
import Link from 'next/link'
import {twMerge} from 'tailwind-merge'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

type linkButtonType = 'thin'|'normal'

interface props
{
  href?:string
  label:string
  className?:string
  icon?:IconProp
  onClick?:()=>void
  type?:linkButtonType
}

export const MyButtonLink = (props:props) => 
{
  const
  {
    href,
    label,
    className,
    type='normal',
    onClick
  }=props


  function getType(type:linkButtonType)
  {
    if(type==='normal')
    {
      return twMerge('bg-primary text-[#fff] px-[.8rem] py-[.5rem] inline-block rounded-[.3rem] capitalize font-bold',className)
    }
    if(type==='thin')
    {
      return twMerge('font-medium hover:underline',className)
    }
  }

  const c = getType(type)

  return (
    <>
      {href && (
        <Link href={href} className={c}>
          {label}
        </Link>
      )}
      {
        onClick&&
        <button className={c} onClick={onClick} >
          {label}
        </button>
      }
    </>
  );
}
