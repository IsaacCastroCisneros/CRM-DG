'use client'
import React,{useState} from 'react'

interface props
{
  status:boolean
  labels:[string,string]
}

export default function SwitchColumn({status,labels}:props)
{
  const[toggle,setToggle]=useState<boolean>(status)

  return (
   <button className={`${toggle ? 'bg-myGreen flex-row-reverse':'bg-myRed'} rounded-[1rem] justify-between text-[#fff] h-[30px] px-[.5rem] flex w-[125px]  items-center font-bold gap-[.3rem] capitalize`}
    onClick={()=>setToggle(prev=>!prev)}
    >
       <span className="bg-[#fff] w-[.8rem] h-[.8rem] rounded-[100%]"></span>
       <span className="text-[.9rem]">{toggle ? labels[0]:labels[1]} </span>
   </button>
  );
}
