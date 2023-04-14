import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

interface props
{
    icon:IconProp;
    label:string;
    onClick?:()=>void;
    type?:"button" | "submit" | "reset" | undefined;
    enabled?:boolean
}

export default function MyButtonThin({icon,label,onClick,type='submit',enabled=undefined}:props) 
{
  const isEnabled= enabled!==undefined ? enabled : true

  return (
    <button
      className={`flex border-[2px] bg-myWhite border-primary text-primary items-center px-[1.3rem] py-[.2rem] text-[18px] gap-[1rem] rounded-[.3rem] ${isEnabled ? '':'brightness-[80%] pointer-events-none'}`}
      onClick={onClick}
      type={type}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="capitalize">{label}</span>
    </button>
  );
}
