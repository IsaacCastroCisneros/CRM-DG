"use client"
import maxNum from '@/helpers/maxNum'
import onlyNumFunc from '@/helpers/onlyNumFunc'
import onlyTextFunc from '@/helpers/onlyTextFunc'
import React, {InputHTMLAttributes} from 'react'
import {twMerge} from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  options?:Array<any>
  max?:number
  onlyText?:boolean
  onChange:(e:any)=>void
  file?:FileList
}

export const MyFormInput = ({className,type='text',...props} :props) => 
{
  const
  {
    name,
    options,
    onlyText,
    max,
    onChange=()=>null,
  }=props


  const c = twMerge(`w-[100%] flex-1 bg-[#fff] placeholder:capitalize py-[.8rem] px-[1rem] rounded-[.4rem] shadow-[0_.3rem_.5rem_0px] shadow-[#d9dbda] flex flex-col`,className)

  const label = name?.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(); 

  return (
    <>
      {!options && type !== "textarea" && (
        <div className={c}>
          <label className='text-[#AAB1B8] font-medium text-[14px] capitalize' >{label}</label>
          <input
            {...props}
            className='outline-none font-bold text-[20px] text-[#374957]'
            type={type}
            size={1}
            onKeyPress={(e: any) => {
              if (type === "number") onlyNumFunc(e);
              if (onlyText) onlyTextFunc(e);
            }}
            onChange={(e) => {
              if (max) {
                e.target.value = maxNum(e.target.value, max);
              }
              onChange(e);
            }}
          />
        </div>
      )}
      {options && (
        <select
          defaultValue="myDefault"
          size={1}
          className={`${c} capitalize flex-1`}
          onChange={onChange}
        >
          <option value="myDefault">{label}</option>
          {options.map((op, pos) => (
            <option key={pos} value={op}>
              {op}
            </option>
          ))}
        </select>
      )}
      {type === "textarea" && (
        <textarea
          className="resize-none w-[100%] outline-none focus:border-primary border-[1px] h-[5rem] rounded-[.5rem] p-[.5rem] bg-slate-100"
          onChange={onChange}
        ></textarea>
      )}
    </>
  );
}
