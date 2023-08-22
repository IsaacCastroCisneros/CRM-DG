import noti from '@/interfaces/noti'
import notiType from '@/interfaces/notiTypes'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

interface typesNotiOptions
{
  styles:string
  label:string
  icon:IconProp
}

export const Notification = ({noti,setNoti}:{noti:noti,setNoti:React.Dispatch<React.SetStateAction<noti>>}) => 
{
  const{show,type}=noti

  useEffect(()=>
  {
    if(show)
    {
        setTimeout(()=>
        {
            setNoti(prev=>{return{...prev,show:false}})
        },3000)
    }
  },[noti])

  const TYPES_NOTI:Record<notiType, typesNotiOptions>=
  {
    failed:{styles:"bg-red-500",label:"A Ocurrido un Error",icon:faXmarkCircle},
    success:{styles:"bg-green-400",label:"Operacion Realizada",icon:faCheckCircle},
    alert:{styles:"bg-green-400",label:"Operacion Realizada",icon:faCheckCircle}
  }

  const{styles,label,icon}=TYPES_NOTI[type]

  return (
    <div className={twMerge('flex text-[#fff] fixed right-[2rem] top-[2rem] duration-200 ease-in-out z-[99999] items-center px-[.8rem] gap-[.5rem] py-[.5rem] rounded-[.5rem] shadow-2xl',styles)}
     style={
        {
           pointerEvents:show ? 'auto':'none',
           opacity:show ? '1':'0',
           transform:show?'translateY(2rem)':'translateY(0px)'
        }}
     >
        <FontAwesomeIcon size='2xl' icon={icon} />
        <span className='text-[1.3rem]'>
            {label}
        </span>
    </div>
  )
}
