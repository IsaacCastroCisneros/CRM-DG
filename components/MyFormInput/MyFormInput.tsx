"use client"
import maxNum from '@/helpers/maxNum'
import onlyNumFunc from '@/helpers/onlyNumFunc'
import onlyTextFunc from '@/helpers/onlyTextFunc'
import { faFile, faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {InputHTMLAttributes, useState} from 'react'
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
  const{name,options,onlyText,max,onChange=()=>null,file}=props
 
  const def= 'py-[.3rem] px-[.5rem] outline-none outline-none rounded-[.4rem] focus:border-primary border-[1px] w-[100%]'

  const c = twMerge(`${def} bg-slate-200`,className)
  const cs= twMerge(`${def}`,className)

  const label = name?.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(); 

  return (
    <div className="flex flex-col flex-1">
      {name && <label className="capitalize">{label}&nbsp;:</label>}
      {!options && type !== "textarea" && (
        <div className="relative">
          <input
            {...props}
            className={c + ` ${type === "file" ? "opacity-0 h-[8rem]" : ""}`}
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
          {type === "file" && (
            <div className={`absolute w-[100%] h-[100%] left-0 top-0 pointer-events-none border-[6px] border-green-400 rounded-[1rem] border-dotted flex justify-center items-center ${file ? 'bg-green-400 text-[#fff]':'text-green-400'}`}>
              {
                <p className="flex flex-col justify-center items-center">
                  <FontAwesomeIcon size="3x" icon={faFileCirclePlus} />
                  {!props.multiple&&file&&<span>{file[0].name}</span>}
                  {!file && <span>Arrastra o Agrega archivos</span>}
                </p>
              }
            </div>
          )}
        </div>
      )}
      {options && (
        <select size={1} className={cs} onChange={onChange}>
          {options.map((op, pos) => (
            <option key={pos} value={op}>
              {op}
            </option>
          ))}
        </select>
      )}
      {type === "textarea" && (
        <textarea
          className=" resize-none w-[100%] outline-none focus:border-primary border-[1px] h-[5rem] rounded-[.5rem] p-[.5rem] bg-slate-100"
          onChange={onChange}
        ></textarea>
      )}
    </div>
  );
}
