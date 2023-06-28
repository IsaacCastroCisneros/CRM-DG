"use client"

import React, { useState } from 'react'
import option from '../../../interface/options'
import { CloseButton } from '@/components/CloseButton/CloseButton'

interface props 
{
    pos:number
    field:string
    handleUpdatingOptions:(pos:number,change:any,newOptions:boolean)=>void
    handleDeleteOption:(pos:number)=>void
    id:string
    op:option
}

export const QuestionOption = (props:props) => 
{
  const
  {
    pos,
    field,
    handleUpdatingOptions,
    handleDeleteOption,
    id,
    op
   }=props

   const[show,setShow]=useState<boolean>(false)

  return (
    <li
      key={pos}
      className="flex items-center text-[#fff] gap-[1rem] bg-[transparent] relative"
    >
      <textarea
        className={`${field} ${
          op.correct ? "!border-green-500" : "!border-red-500"
        }`}
        value={op.label}
        placeholder="respuesta"
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}
        onChange={(e) => handleUpdatingOptions(pos, e.target.value, false)}
      ></textarea>
      <CloseButton
        onMouseEnter={()=>setShow(true)}
        onMouseLeave={()=>setShow(false)}
        onClick={()=>handleDeleteOption(pos)}
        className={`bg-pink-500 w-[1.5rem] h-[1.5rem] right-auto left-[-1rem] text-[.8rem] ${
          show
            ? "pointer-events-auto opacity-1"
            : "pointer-events-none opacity-0"
        }`}
      />
      <input
        type="radio"
        name={id}
        value={pos}
        checked={op.correct}
        onChange={(e) => handleUpdatingOptions(pos, e.target.checked, true)}
      />
    </li>
  );
}
