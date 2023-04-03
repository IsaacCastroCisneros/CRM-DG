import React from 'react'

export default function MyFlexContainer({children}:{children:any})
{
    return(
        <div className='flex gap-[1rem]'>
          {
            children
          }
        </div>
    )
}
