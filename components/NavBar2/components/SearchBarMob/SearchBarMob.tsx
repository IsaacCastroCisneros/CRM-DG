'use client'

import React, { useEffect, useState } from 'react'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clicking from '@/helpers/clicking'

export default function SearchBarMob()
{
  const[show,setShow]=useState(false)

  useEffect(()=>
  {
    window.addEventListener('click',(e)=>clicking(e,'.searchbar-button','.search-container',setShow))

    return ()=>window.removeEventListener('click',(e)=>clicking(e,'.searchbar-button','.search-container',setShow))
  })

  return (
    <div className='relative hidden mob:block'>
      <button
        className="text-[#8f979c] searchbar-button relative"
        onClick={() => setShow((prev) => !prev)}
      >
        <FontAwesomeIcon
          className="scale-x-[-1.5] scale-y-[1.5]"
          icon={faMagnifyingGlass}
        />
      </button>
      <div
          className={`bg-[#fff] search-container border-[1px] transition-all duration-200 border-[#dee2e6] p-[24px] inline-block rounded-[.2rem] absolute top-[calc(100%_+_28px)] right-0 ${
            show ? "translate-y-[0] opacity-1 pointer-events-auto" : "translate-y-[-2rem] opacity-0 pointer-events-none"
          }`}
        >
          <div className="border-[1px] border-[#dee2e6] py-[7.2px] px-[14px] mob2:w-[calc(100vw_-_6rem)] mob:w-[270px] rounded-[.2rem]">
            <input
              type="text"
              className="w-[100%] outline-none text-myText2"
              placeholder="Search..."
            />
          </div>
        </div>
    </div>
  );
}
