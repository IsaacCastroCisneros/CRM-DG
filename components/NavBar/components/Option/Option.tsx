"use client"

import React,{useState} from 'react'
import option from '../../interfaces/option';
import { SubOption } from './components/SubOption';
import Link from 'next/link';

export const Option = (props:option) => 
{
  const[show,setShow]=useState<boolean>(false)
  const{label,options,path}=props

  const buttonLink = "text-myGray font-medium capitalize hover:text-myGray3"

  return (
    <li
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {!path && <button className={`${buttonLink} cursor-default`}>{label}</button>}
      {path && (
        <Link className={`${buttonLink} hover:underline`} href={path}>
          {label}
        </Link>
      )}
      <div
        className="absolute top-[100%] left-0 duration-[150ms] ease-in-out pt-[1.4rem]"
        style={{
          top: show ? "105%" : 0,
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
        }}
      >
        {options && (
          <ul className='min-w-[8rem] bg-[#fff] my-shadow max-w-[16rem] border-[1px] border-myBorder'>
            {options.map((o, pos) => (
              <SubOption key={pos} {...o} setShow={setShow} />
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
