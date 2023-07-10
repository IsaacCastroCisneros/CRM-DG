import buttonLink from '@/styles/buttonLink'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ButtonHTMLAttributes, Children, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
  children:ReactNode
  cancel?:boolean
  icon?:IconProp
}

export const MyButton = (myProps:props) => 
{
  const
  {
    children,
    className,
    cancel,
    icon,
    ...props
  }=myProps
  const c = twMerge(buttonLink(cancel),className);

  return (
    <button {...props} className={c}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {children}
    </button>
  );
}
