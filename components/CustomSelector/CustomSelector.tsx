import camelToNormal from '@/helpers/camelToNormal'
import inputContainer from '@/styles/inputContainer'
import inputLabel from '@/styles/inputLabel'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface props
{
  name:string
}

export const CustomSelector = ({name}:props) => 
{
  const myName = camelToNormal(name)

  return (
    <div className={inputContainer}>
      <label className={`${inputLabel} mb-[.6rem]`}>{myName}</label>
      <div className='flex gap-[1rem]'>
        <span className="px-[1rem] py-[.4rem] rounded-[2rem] bg-[#f0f2f0] font-semibold inline-flex items-center gap-[.5rem]">
          <button>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          Julio
        </span>
        <span className="px-[1rem] py-[.4rem] rounded-[2rem] bg-[#f0f2f0] font-semibold inline-flex items-center gap-[.5rem]">
          <button>
            <FontAwesomeIcon icon={faXmark} />
          </button>
          Sebastian
        </span>
      </div>
    </div>
  );
}
