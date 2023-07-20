import buttonLink from '@/styles/buttonLink'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends LinkProps
{
  children:ReactNode
  className?:string
  cancel?:boolean
  icon?:IconProp
}

export const MyLink = (myProps:props) => 
{
  const
  {
    children,
    cancel,
    className,
    icon,
    ...props
  }=myProps

  const c = twMerge(buttonLink(cancel),className) 

  return (
    <Link {...props} className={c}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </Link>
  ); 
}
