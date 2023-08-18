import React, { ReactNode } from 'react'

interface props
{
   children:ReactNode
}

export default function ContainerStepSwitchButton({children}:props) 
{
  return (
    <div className='flex bg-[#fff] my-shadow mb-[4rem]'>
      {
        children
      }
    </div>
  )
}
