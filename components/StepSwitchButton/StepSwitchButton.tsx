import subject from '@/interfaces/subject'
import React, { ButtonHTMLAttributes, Dispatch, ReactNode, SetStateAction } from 'react'


interface props extends ButtonHTMLAttributes<HTMLButtonElement>
{
  step:number
  setValues:Dispatch<SetStateAction<subject>>
  content:{strong:string,p:string}
  current:number
}

export default function StepSwitchButton(myProps:props) 
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
      className={`border-shadow border-[1px] px-[1rem] py-[.7rem] flex-1 flex flex-col justify-center items-center ${
        current === step ? "bg-primary text-[#fff]" : "text-myGray"
      }`}
      onClick={() =>
        setValues((prev) => {
          return { ...prev, step };
        })
      }
    >
      <strong className="uppercase">{content.strong}</strong>
      <p className='capitalize'>{content.p}</p>
    </button>
  );
}


