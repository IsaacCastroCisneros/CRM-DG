"use client"

import useClickOutside from '@/hooks/useClickOutside'
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Option from './components/Option'
import option from '../../interfaces/option'

interface props
{
  options:Array<option>
}

export const MenuColumns = ({options}:props) => 
{
  const[show,setShow]=useState<boolean>(false)
  const{ref}=useClickOutside(()=>setShow(false))

  return (
    <div ref={ref} className="relative z-[999]">
      <button onClick={() => setShow((prev) => !prev)}>
        <FontAwesomeIcon size="2xl" icon={faEllipsisVertical} />
      </button>
      {show && (
        <ul className="bg-[#fff] my-shadow absolute top-0 left-[200%] min-w-[8rem]">
          {
            options.map((o,pos)=>
            (
              <Option key={pos} option={o} setShow={setShow} />
            ))
          }
        </ul>
      )}
    </div>
  );
}

