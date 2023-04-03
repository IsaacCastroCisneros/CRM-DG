'use client'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function SearchBar() 
{
  return (
    <div className="flex bg-mySearchField w-[320px] max-w-[100%] items-stretch text-[#fff] rounded-[.2rem] mob:hidden">
      <div className="flex px-[.8rem] flex-1 items-center py-[.4rem] gap-[1.2rem] mob:hidden">
        <FontAwesomeIcon className="text-[#8f979c]" icon={faMagnifyingGlass} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-[transparent] flex-1 outline-none min-w-[0px] placeholder:text-[#6c757d]"
          size={1}
        />
      </div>
      <button className="bg-myLitePurple px-[1.1rem] rounded-[.2rem] hover:bg-myLitePurpleHover transition-all duration-200 flex items-center">
        <p>
        Search
        </p> 
      </button>
    </div>
  );
}
