import React from 'react'
import { twMerge } from 'tailwind-merge'
interface props
{
  children:React.ReactNode
  margin?:boolean
  className?:string
  gap?:'98px'|'64px'
}

export default function MyFlexContainer({children,className,gap='98px'}:props)
{
    const c = twMerge(`flex`,className)
    
    return(
        <div className={c}
          style={{gap}}
          >
          {
            children
          }
        </div>
    )
}
