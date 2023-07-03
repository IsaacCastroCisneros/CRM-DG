"use client"

import React,{useState} from 'react'
import option from '../../interfaces/option';
import { SubOption } from './components/SubOption';

export const Option = (props:option) => 
{
  const[show,setShow]=useState<boolean>(false)
  const{label,options}=props

  return (
    <li
      className="relative"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button className="text-myGray font-medium">{label}</button>
      <div
        className="absolute left-0 duration-[400ms] ease-in-out"
        style={{
          top: show ? "100%" : 0,
          opacity: show ? 1 : 0,
          pointerEvents: show ? "auto" : "none",
        }}
      >
        <ul>
          {options.map((o, pos) => (
            <SubOption key={pos} {...o} setShow={setShow} />
          ))}
        </ul>
      </div>
    </li>
  );
}
