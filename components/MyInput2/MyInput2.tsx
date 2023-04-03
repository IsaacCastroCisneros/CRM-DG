'use client'

import onlyNumFunc from '@/helpers/onlyNumFunc';
import onlyTextFunc from '@/helpers/onlyTextFunc';
import React, { useState } from 'react'
interface props
{
  placeholder?:string,
  value?:string|number,
  onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
  type?:string;
  err?:string | undefined;
  styles?:string;
  limit?:number|string|false
}

export default function MyInput2(props:props) 
{
  const[focus,setFocus]=useState<boolean>(false)

  const 
  {
    placeholder='',
    value='',
    onChange=()=>null,
    type='text',
    err,
    styles='',
    limit=false
  }=props

  return (
    <div
      className={`border-[1px] px-[14px] py-[7.2px] rounded-[.2rem] text-myTextInput transition-all relative duration-200 ${
        focus ? "border-myBorderDark" : "border-myBorder"
      } ${styles===''?'flex-1':styles}`}
    >
      <input
        className="outline-none placeholder:text-[.8rem] w-[100%]"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(e)=>
          {
            if(!limit)
            {
              onChange(e) 
              return
            }
            if(e.target.value.length>limit)e.target.value=e.target.value.substring(0,(e.target.value.length-1))
            onChange(e)
          }}
        type={type}
        value={value}
        onKeyPress={(e)=>
          {
            if(type==='number')onlyNumFunc(e)
            if(type==='text')onlyTextFunc(e)
          }}
        placeholder={placeholder + "..."}
        size={1}
      />
      <span className='bg-myRed absolute right-0 text-myWhite bottom-0 translate-y-[50%] px-[1rem] rounded-[.5rem]'>
         {
            err
         }
      </span>
    </div>
  );
}

