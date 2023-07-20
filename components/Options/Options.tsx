import React from 'react'
import {twMerge} from 'tailwind-merge'

export default function Options({children,className}:{children:React.ReactNode,className?:string})
{
  const c = twMerge('flex flex-wrap gap-[.5rem] justify-center max-w-[469px]',className)

  return(
    <div className={c}>
      {
        children
      }
    </div>
  )
}
