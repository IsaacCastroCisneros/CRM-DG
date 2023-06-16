import React from 'react'
import { twMerge } from 'tailwind-merge'
interface props
{
  children:React.ReactNode
  margin?:boolean
  className?:string
}

export default function MyFlexContainer({children,margin=true,className}:props)
{
    const c = twMerge(`flex gap-[1rem] ${margin ?'mb-[.7rem]':'' }`,className)
    
    return(
        <div className={c}>
          {
            children
          }
        </div>
    )
}
