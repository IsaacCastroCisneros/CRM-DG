import camelToNormal from '@/helpers/camelToNormal'
import React, { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{

}

export const SwitchInput = ({className,checked,name,...props}:props) => 
{
  const c = twMerge('absolute top-0 left-0 w-[100%] h-[100%] opacity-0 cursor-pointer',className)

  const label = camelToNormal(name||'')

  return (
    <div className='flex items-center gap-[1rem] mb-[1.5rem]'>
      <div
        className={`relative p-[.2rem] rounded-[1rem] ${
          checked ? "justify-end bg-primary" : "justiy-start bg-myGray"
        } flex w-[2.2rem]`}
      >
        <div className="rounded-[100%] bg-[#fff] w-[.7rem] h-[.7rem]"></div>
        <input {...props} className={c} type="checkbox" />
      </div>
      <label className={`font-semibold capitalize ${checked ? '':'text-myGray'}`} >
        {label}
      </label>
    </div>
  );
}
