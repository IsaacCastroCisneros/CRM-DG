"use client"

import HoverMsg from '@/components/HoverMsg/HoverMsg';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react'
import { faBars, faCopy, faEdit, faEye, faInfoCircle, faPlusCircle, faSave, faTrashCan, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface props
{
  icon?:IconProp,
  onClick?:()=>void,
  styles?:string,
  label:string
  type?:'info'|'edit'|'delete'|'more'|'ver'|'add'|'save'|'duplicate'|'user',
  href?:string,
  typeButton?:"button" | "submit" | "reset" | undefined,
  size?:SizeProp
}

export default function Option(props:props)
{
  const
  {
    icon,
    onClick,
    styles,
    label,
    type='',
    href,
    typeButton,
    size="lg"
  }=props

  const[isHover,setIsHover]=useState<boolean>(false) 

  const myStyles =`text-myBorderDark relative hover:text-[#78797a] transition-all duration-200 text-[1rem] ${styles}`

  return (
    <>
      {onClick && (
        <button
          className={myStyles}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={onClick}
          type={typeButton}
        >
          <HoverMsg
            label={label}
            isHover={isHover}
            initial={"translate-y-[-60%] opacity-0"}
            active={"translate-y-[-100%] opacity-1"}
            styles={"top-0 translate-x-[-50%] left-[50%]"}
          />
          <FontAwesomeIcon size={size} icon={icon || givingTheIcon(type)} />
        </button>
      )}
      {href && (
        <Link
          className={myStyles}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          href={href}
        >
          <HoverMsg
            label={label}
            isHover={isHover}
            initial={"translate-y-[-60%] opacity-0"}
            active={"translate-y-[-100%] opacity-1"}
            styles={"top-0 translate-x-[-50%] left-[50%]"}
          />
          <FontAwesomeIcon size={size} icon={icon || givingTheIcon(type)} />
        </Link>
      )}
    </>
  );
}

function givingTheIcon(type:string)
{
  switch(type)
  {
    case 'info':
      {
        return faInfoCircle;
      }
    case 'edit':
      {
        return faEdit 
      }
    case 'delete':
      {
        return faTrashCan 
      }
    case 'more':
      {
        return faBars
      }
    case 'ver':
      {
        return faEye
      }
    case 'add':
      {
        return faPlusCircle
      }
    case 'save':
      {
        return faSave
      }
    case 'duplicate':
      {
        return faCopy
      }
    case 'user':
      {
        return faUser
      }
    default:
      {
        return faBars
      } 
  }
}
