'use client'

import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
interface props
{
  label:string;
  icon:IconProp;
  onClick?:()=>void;
  href?:string;
  bg:string;
  type?:"button" | "submit" | "reset" | undefined;
  styles?:string;
}

export default function MyButton(props:props)
{
  const
  {
    label,
    icon,
    onClick=()=>null,
    bg,
    href,
    type='button',
    styles
  }=props

  function gettingMySmug(bg:string)
  {
    switch(bg)
    {
      case 'bg-myRed':
        {
          return {smug:'#fa5c7c80',hover:'hover:bg-myRedDark'}  
        }
      case 'bg-myGreen':
        {
          return {smug:'#0acf9780',hover:'hover:bg-myGreenDark'}  
        }
      case 'bg-myYellow':
        {
          return {smug:'#ffbc0080',hover:'hover:bg-myYellowDark'}  
        }
      default: ''
    }
  }

  const myHover=gettingMySmug(bg)?.hover
  const mySmug = gettingMySmug(bg)?.smug

  const myStyles = `${bg} transition-all ${myHover} duration-200 text-myWhite px-[.8rem] py-[.4rem] flex gap-[.8rem] items-center ${styles}`
  const myInlineStyles = 
  {
    boxShadow: `0 2px 6px 0 ${mySmug}`,
  };

  return (
    <>
      {
        !href&&
        <button
          className={myStyles}
          onClick={onClick}
          style={myInlineStyles}
          type={type}
        >
          <MyButtonContent icon={icon} label={label} />
        </button>
      }
      {
        href&&
        <Link className={myStyles} 
         href={href} 
         style={myInlineStyles}
         >
          <MyButtonContent icon={icon} label={label} />
        </Link>
      }
    </>
  );
}

function MyButtonContent({icon,label}:{label:string,icon:IconProp})
{
  return (
    <>
      <FontAwesomeIcon icon={icon}/>
      {label}
    </>
  );
}
