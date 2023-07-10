import React, { ButtonHTMLAttributes, Dispatch, ReactNode, SetStateAction } from 'react'
import curso from '../../../interfaces/curso';

interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
  step:number
  setValues:Dispatch<SetStateAction<curso>>
  content:{strong:string,p:string}
  current:number
}

export const SwitchButton = (myProps:props) => 
{
  const
  {
    setValues,
    step,
    content,
    current,
    ...props
  }=myProps

  return (
    <button
      {...props}
      className={`border-shadow border-[1px] px-[1rem] py-[.7rem] flex-1 flex flex-col justify-center items-center ${current===step ?'bg-primary text-[#fff]':'text-myGray'}`} 
      onClick={() => setValues(prev=>{return{ ...prev, step }})}
    >
      <strong className='uppercase'>
        {content.strong}
      </strong>
      <p>
        {content.p}
      </p>
    </button>
  );
}
