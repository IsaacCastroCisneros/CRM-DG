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

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  options?:Array<string|option>
  max?:number
  onlyText?:boolean
  onChange:(e:any)=>void
  file?:FileList
}

interface option
{
  value?:string,
  label:string,
  disabled?:boolean
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

  const c = twMerge(inputContainer,className)
  const label = camelToNormal(name||'')

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
          <label className={inputLabel}>{label}</label>
          {!options && type !== "textarea" && (
            <input
              {...props}
              className={input}
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
          )}
          {options && (
            <select
              defaultValue={props.value !== "" ? props.value : "myDefault"}
              size={1}
              className="outline-none font-bold text-[20px] capitalize"
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
              onChange={onChange}
            ></textarea>
          )}
        </div>
      }
    </>
  );
}
