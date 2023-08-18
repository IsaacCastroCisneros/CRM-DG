import buttonLink from '@/styles/buttonLink'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
  children:ReactNode
  cancel?:boolean
  icon?:IconProp
  finish?:boolean
  noWidth?:boolean
}

export const MyButton = (myProps:props) => 
{
  const
  {
    children,
    className,
    cancel,
    icon,
    finish,
    noWidth,
    disabled,
    ...props
  }=myProps

  const noWidthStyle = noWidth ? 'px-[1rem] py-[.6rem] w-auto h-auto':''

  const c = twMerge(buttonLink(cancel,finish),className+noWidthStyle)

  return (
    <button {...props} className={c+` ${disabled ? 'brightness-75':''}`} disabled={disabled} >
      {icon && <FontAwesomeIcon size='xl' icon={icon} />}
      {children}
    </button>
  );
}
