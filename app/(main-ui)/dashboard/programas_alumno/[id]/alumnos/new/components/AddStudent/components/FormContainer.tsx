import React from 'react'

export default function FormContainer({children}:{children:React.ReactNode}) 
{
  return (
    <div className='px-[2rem] py-[1.8rem] bg-[#F5F6F8] mb-[2rem]' >
       {children}
    </div>
  )
}
