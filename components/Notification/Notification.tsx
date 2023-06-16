import noti from '@/interfaces/noti'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'

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

  return (
    <div className='flex bg-green-400 text-[#fff] fixed right-[2rem] top-[2rem] duration-200 ease-in-out z-[99999] items-center px-[.8rem] gap-[.5rem] py-[.5rem] rounded-[.5rem] shadow-2xl'
     style={
        {
           pointerEvents:show ? 'auto':'none',
           opacity:show ? '1':'0',
           transform:show?'translateY(2rem)':'translateY(0px)'
        }}
     >
        <FontAwesomeIcon size='2xl' icon={faCheckCircle} />
        <span className='text-[1.3rem]'>
            Operacion Realizada
        </span>
    </div>
  )
}
