import HoverMsg from '@/components/HoverMsg/HoverMsg';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react'
import { faBars, faEdit, faEye, faInfoCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface props
{
  icon?:IconProp,
  onClick?:()=>void,
  styles?:string,
  label:string
  type?:string,
  href?:string
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
    href
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
        >
          <HoverMsg
            label={label}
            isHover={isHover}
            initial={"translate-y-[-60%] opacity-0"}
            active={"translate-y-[-100%] opacity-1"}
            styles={"top-0 translate-x-[-50%] left-[50%]"}
          />
          <FontAwesomeIcon icon={icon || givingTheIcon(type)} />
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
          <FontAwesomeIcon icon={icon || givingTheIcon(type)} />
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
    default:
      {
        return faBars
      } 
  }
}
