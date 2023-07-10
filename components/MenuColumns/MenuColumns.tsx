"use client"

import useClickOutside from '@/hooks/useClickOutside'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

export const MenuColumns = () => 
{
  const[show,setShow]=useState<boolean>(false)
  const{ref,opt}=useClickOutside(()=>setShow(false))

  return (
    <div ref={ref} className="relative z-[999]">
      <button onClick={() => setShow((prev) => !prev)}>
        <FontAwesomeIcon size='2xl' icon={faEllipsisVertical} />
      </button>
      {show && (
          <ul className='bg-[#000] absolute top-0 left-[200%] min-w-[5rem] h-[10rem]'>
             <button ref={opt} className='bg-[#000]' >
                lel
             </button>
          </ul>
      )}
    </div>
  );
}
