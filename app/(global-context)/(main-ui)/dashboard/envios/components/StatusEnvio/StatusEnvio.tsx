'use client'

import HoverMsg from '@/components/HoverMsg/HoverMsg'
import { faCheckCircle, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import registroEnvio from '../../interface/registroEnvio'

export default function StatusEnvio({exist}:{exist:Array<registroEnvio>}) 
{
  const[show,setShow]=useState<boolean>(false)

  const flag = exist.length>0 ? {color:'text-green-500',icon:faCheckCircle,label:'Registrado'} : {color:'text-yellow-500',icon:faTriangleExclamation,label:'Pendiente'} 

  return (
    <div className='relative'
     onMouseEnter={()=>setShow(true)}
     onMouseLeave={()=>setShow(false)}
     >
        <div className='relative z-[99]'>
        <FontAwesomeIcon className={`${flag.color} text-[2rem] z-[99] relative`} icon={flag.icon} />
        </div>
        <HoverMsg label={flag.label} type='down-to-up' isHover={show} />
    </div>
  )
}
