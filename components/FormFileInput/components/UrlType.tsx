import React, { HtmlHTMLAttributes, InputHTMLAttributes } from 'react'

export const UrlType = () => {
  return (
    <div className='flex flex-col gap-[.5rem] mb-[1rem]'>
        <Input placeholder='Nombre'/>
        <Input placeholder='Link' />
    </div>
  )
}

function Input(props:InputHTMLAttributes<HTMLInputElement>)
{
    return (
      <input
        {...props}
        type="text"
        className="flex-1 text-[#fff] rounded-[.3rem] border-gray-300 border-[1px] bg-slate-700 placelholder:text-gray-200 px-[.5rem] py-[.6rem] outline-none focus:border-blue-400"
      />
    );
}
