import Link from 'next/link';
import React, { Dispatch, SetStateAction } from 'react'

interface props
{
  label:string,
  onClick?:()=>void,
  type?:"button" | "submit" | "reset" | undefined,
  styles?:string,
  href?:string,
}

export default function NewButton(props:props) 
{
  const
   {
    label,
    onClick,
    type='button',
    styles,
    href=false
   }=props

  const myStyles = `px-[1.5rem] py-[.4rem] capitalize bg-primary text-[#fff] font-medium rounded-[.3rem] hover:bg-[#2a54d4] transition-all duration-200 ${styles} whitespace-nowrap hover:opacity-[.8] transition-all duration-[200ms]`

  return (
    <>
      {!href && (
        <button className={myStyles} onClick={onClick} type={type}>
          {label}
        </button>
      )}
      {
        href&&<Link href={href} className={myStyles} >{label}</Link>
      }
    </>
  );
}
