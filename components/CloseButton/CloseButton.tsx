import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'


export const CloseButton = (props:ButtonHTMLAttributes<HTMLButtonElement>) => 
{
  const c = twMerge('text-[#fff] bg-black border-[1px] border-[#fff] w-[2rem] h-[2rem] flex justify-center items-center rounded-[100%] absolute top-[-1rem] right-[-1rem]',props.className)

  return (
    <button 
     type='button'
     {...props}
     className={c}
     >  
       <FontAwesomeIcon icon={faXmark} />
    </button>
  )
}
