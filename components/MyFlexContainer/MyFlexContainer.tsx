import React from 'react'

interface props
{
  children:React.ReactNode
  margin?:boolean
}

export default function MyFlexContainer({children,margin=true}:props)
{
    return(
        <div className={`flex gap-[1rem] ${margin ?'mb-[.7rem]':'' }`}>
          {
            children
          }
        </div>
    )
}
