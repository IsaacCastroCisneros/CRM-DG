import React, { Dispatch, SetStateAction } from 'react'
import option from '../../../interfaces/option'
import Link from 'next/link'
import useClickOutside from '@/hooks/useClickOutside'

interface props 
{
  option:option
  setShow:Dispatch<SetStateAction<boolean>>
}

export default function Option({option,setShow}:props) 
{
  const{href,onClick=()=>null,label}=option
  const{opt}=useClickOutside(()=>setShow(false))

  const styles = "w-[100%] text-left py-[.2rem] block px-[.7rem] hover:bg-myGray border-b-[1px] border-myBorder hover:text-[#fff] capitalize whitespace-nowrap overflow-hidden text-ellipsis max-w-[12rem]"

  return (
    <>
      {!href && (
        <button onClick={onClick} className={styles} ref={opt}>
          {label}
        </button>
      )}
      {href && (
        <Link href={href} className={styles} >
          {label}
        </Link>
      )}
    </>
  );
}
