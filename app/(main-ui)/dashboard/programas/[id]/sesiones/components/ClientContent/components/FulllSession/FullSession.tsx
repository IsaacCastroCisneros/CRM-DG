"use client"

import React, { Dispatch, SetStateAction,useState } from 'react'
import fullSession from '../../interfaces/fullSession'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import dragStatus from './interfaces/dragStatus'
import { SessionList } from './components/SessionList/SessionList'

interface props
{
  current:fullSession
}

export default function FullSession({current}:props)
{
  const{title,id}=current

  const[dragStatus,setDragStatus]=useState<dragStatus>({current:'',over:''})

  const path =usePathname()||''

  return (
    <div className="flex flex-col items-end gap-[1rem]">
      <div className="flex w-[100%] my-shadow px-[1rem] py-[.7rem] text-[1.2rem] rounded-[.5rem] font-bold justify-between">
        {title}
        <Link href={`${path}/new`}>
          <FontAwesomeIcon size="xl" icon={faPlusCircle} />
        </Link>
      </div>
        <SessionList  current={current} dragStatus={dragStatus} setDragStatus={setDragStatus} />
    </div>
  );
}

