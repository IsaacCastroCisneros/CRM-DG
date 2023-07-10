import buttonLink from '@/styles/buttonLink'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends LinkProps
{
  children:ReactNode
  className?:string
  cancel?:boolean
}

export const MyLink = ({children,cancel,className,...props}:props) => 
{
  const c = twMerge(buttonLink(cancel),className) 

  return <Link {...props} className={c} >{children}</Link>;
}
