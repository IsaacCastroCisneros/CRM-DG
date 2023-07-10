import buttonLink from '@/styles/buttonLink'
import React, { ButtonHTMLAttributes, Children, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
  children:ReactNode
  cancel?:boolean
}

export const MyButton = ({children,className,cancel,...props}:props) => 
{

  const c = twMerge(buttonLink(cancel),className);

  return (
    <button
     {
       ...props
     }
     className={c}
     >
      {
        children
      }
    </button>
  )
}
