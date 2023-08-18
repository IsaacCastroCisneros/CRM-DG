"use client"

import camelToNormal from '@/helpers/camelToNormal'
import maxNum from '@/helpers/maxNum'
import onlyNumFunc from '@/helpers/onlyNumFunc'
import onlyTextFunc from '@/helpers/onlyTextFunc'
import input from '@/styles/input'
import inputContainer from '@/styles/inputContainer'
import inputLabel from '@/styles/inputLabel'
import React, {InputHTMLAttributes} from 'react'
import {twMerge} from 'tailwind-merge'
import TextEditor from './components/TextEditor'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  options?:Array<string|option>
  max?:number
  onlyText?:boolean
  onChange:(e:any)=>void
  file?:FileList
  textEditor?:boolean
  label?:string
  isMoney?:boolean
}

interface option
{
  value?:string,
  label:string,
  disabled?:boolean
}

export const MyFormInput = ({className,type='text',...props}:props) => 
{
  const
  {
    name,
    options,
    onlyText,
    max,
    onChange=()=>null,
    isMoney=false,
    textEditor,
  }=props

  const c = twMerge(inputContainer,className)
  const finalLabel =camelToNormal(name||'')
  const isRed= finalLabel.startsWith('*')

  function gettingValue(op:string|option):string
  {
     if(typeof op==='string')return op
     if(!op.value)return ''
     return op.value
  }
  function gettingLabel(op:string|option):string
  {
     if(typeof op==='string')return op
     return op.label
  }
  function gettingDisabled(op:string|option):boolean
  {
     if(typeof op==='string')return false
     if(!op.disabled)return false
     return op.disabled
  }


  return (
    <>
      {
        <div className={c}>
          <label
            className={twMerge(inputLabel, `${isRed ? "text-red-500" : ""}`)}
          >
            {finalLabel}
          </label>
          {!textEditor && (
            <>
              <div className="relative">
                {isMoney && (
                  <div className="absolute left-[0] translate-y-[-50%] top-[50%]">
                    S/.
                  </div>
                )}
                {!options && type !== "textarea" && (
                  <input
                    {...props}
                    className={
                      input +
                      ` ${type === "number" ? "w-[100%]" : ""} ${
                        isMoney ? "pl-[1.3rem]" : ""
                      }`
                    }
                    step="0.01"
                    type={type}
                    pattern="[0-9]*[.]?[0-9]{0,2}"
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
                )}
              </div>
              {options && (
                <select
                  value={props.value !== "" ? props.value : "myDefault"}
                  size={1}
                  className="outline-none font-bold text-[20px] capitalize hover:cursor-pointer py-[.4rem]"
                  onChange={onChange}
                >
                  <option value="myDefault" disabled>
                    Seleccione Opcion
                  </option>
                  {options.map((op, pos) => (
                    <option
                      key={pos}
                      className={`capitalize ${
                        gettingDisabled(op) ? "text-myGray3 font-bold" : ""
                      }`}
                      value={gettingValue(op)}
                      disabled={gettingDisabled(op)}
                    >
                      {gettingLabel(op)}
                    </option>
                  ))}
                </select>
              )}
              {type === "textarea" && (
                <textarea
                  className={`${input} h-[7rem] resize-none`}
                  value={props.value}
                  onChange={onChange}
                ></textarea>
              )}
            </>
          )}
          {textEditor && <TextEditor onChange={onChange} />}
        </div>
      }
    </>
  );
}
