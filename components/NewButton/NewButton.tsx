import React, { Dispatch, SetStateAction } from 'react'

interface props
{
  label:string,onClick?:()=>void,
  type?:"button" | "submit" | "reset" | undefined,
  styles?:string
}


export default function NewButton({label,onClick,type='button',styles}:props) 
{
  return (
    <button className={`px-[1.5rem] py-[.4rem] capitalize bg-primary text-[#fff] font-medium rounded-[.3rem] hover:bg-[#2a54d4] transition-all duration-200 ${styles}`}
     onClick={onClick}
     type={type}
     >
      {label}
    </button>
  );
}
