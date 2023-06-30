import React from 'react'
import Link from 'next/link'
import {twMerge} from 'tailwind-merge'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type linkButtonType = 'thin'|'normal'|'thin2'

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
    onClick,
    icon
  }=props


  function getType(type:linkButtonType)
  {
    if(type==='normal')
    {
      return twMerge('bg-primary text-[#fff] px-[.8rem] py-[.5rem] inline-flex rounded-[.3rem] capitalize font-bold items-center gap-[.5rem]',className)
    }
    if(type==='thin')
    {
      return twMerge('font-medium hover:underline',className)
    }
    if(type==='thin2')
    {
      return twMerge('hover:underline hover:text-blue-500',className)
    }
  }

  const c = getType(type)

  return (
    <>
      {href && (
        <Link href={href} className={c}>
          {label}
          {icon && <FontAwesomeIcon icon={icon} size='lg' />}
        </Link>
      )}
      {onClick && (
        <button className={c} onClick={onClick} type='button'>
          {label}
          {icon && <FontAwesomeIcon icon={icon} size='lg' />}
        </button>
      )}
    </>
  );
}
