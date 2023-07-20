"use client"

import HoverMsg from '@/components/HoverMsg/HoverMsg';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react'
import { faBars, faClockRotateLeft, faCopy, faEdit, faEye, faInfoCircle, faPlusCircle, faSave, faTrashCan, faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { usePathname } from 'next/navigation';

interface props
{
  icon?:IconProp,
  onClick?:()=>void,
  styles?:string,
  label:string
  type?:'info'|'edit'|'delete'|'more'|'ver'|'add'|'save'|'duplicate'|'user'|'copy'|'history',
  href?:string,
  typeButton?:"button" | "submit" | "reset" | undefined,
  size?:SizeProp
  hoverMsg?:boolean
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
    size="lg",
    hoverMsg=true,
  }=props

  const[isHover,setIsHover]=useState<boolean>(false) 
  const path =usePathname()

  const className = twMerge('text-myGray relative hover:text-myGray3 transition-all duration-200 text-[1rem] flex gap-[.2rem]',styles) 

  return (
    <>
      {onClick && (
        <button
          className={className}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          onClick={onClick}
          type={typeButton}
        >
          {hoverMsg && (
            <HoverMsg
              label={label}
              isHover={isHover}
              initial={"translate-y-[-60%] opacity-0"}
              active={"translate-y-[-100%] opacity-1"}
              styles={"top-0 translate-x-[-50%] left-[50%]"}
            />
          )}
          {
            !hoverMsg&&<Label label={label} />
          }
          <FontAwesomeIcon size={size} icon={icon || givingTheIcon(type)} />
        </button>
      )}
      {href && (
        <Link
          className={className}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          href={`${path}/${href}`}
        >
          {hoverMsg && (
            <HoverMsg
              label={label}
              isHover={isHover}
              initial={"translate-y-[-60%] opacity-0"}
              active={"translate-y-[-100%] opacity-1"}
              styles={"top-0 translate-x-[-50%] left-[50%]"}
            />
          )}
          {
            !hoverMsg&&<Label label={label} />
          }
          <FontAwesomeIcon size={size} icon={icon || givingTheIcon(type)} />
        </Link>
      )}
    </>
  );
}

function Label({label}:{label:string})
{
  return(
    <span className='hover:underline'>
      {
        label
      }
    </span>
  )
}

function givingTheIcon(type:string)
{
  switch (type) {
    case "info": {
      return faInfoCircle;
    }
    case "edit": {
      return faEdit;
    }
    case "delete": {
      return faTrashCan;
    }
    case "more": {
      return faBars;
    }
    case "ver": {
      return faEye;
    }
    case "add": {
      return faPlusCircle;
    }
    case "save": {
      return faSave;
    }
    case "duplicate": {
      return faCopy;
    }
    case "user": {
      return faUser;
    }
    case "copy": {
      return faCopy;
    }
    case "history":
    {
      return faClockRotateLeft
    }
    default: {
      return faBars;
    }
  }
}
