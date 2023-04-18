'use client'

import user from '@/interfaces/user';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { signOut, useSession } from 'next-auth/react';
import { MoonLoader as Spinner } from 'react-spinners'

const UserMenuUltimate=()=> 
{
    const{data:session,status}=useSession()

    const user:any =  session?.user 

  return (
    <>
      {user && status === "authenticated" && (
        <div className="flex items-center px-[20.8px] gap-[1rem]">
          <strong>{user.nombre}</strong>
          <div className="w-[50px] h-[50px] rounded-[100%] overflow-hidden">
            <img src={user.avatar} className="object-cover" />
          </div>
          <button
            className="text-myBlack"
            onClick={() => {
              signOut();
            }}
          >
            <FontAwesomeIcon size="xl" icon={faRightFromBracket} />
          </button>
        </div>
      )}
      {
        status==='loading'&&!user&&<div className='mr-[1rem]'><Spinner color='#2D62ED' size={30} /></div>
      }
    </>
  );
}

interface optionList
{
    label:string;
    icon:IconProp;
    func?:()=>void
}

const UserOptionMenu=({user,setUser}:{user:user,setUser:Dispatch<SetStateAction<user | undefined>>})=>
{
    const[show,setShow]=useState<boolean>(false)

    const optionList:Array<optionList>= [
      {
        label: "sign out",
        icon: faRightFromBracket,
      },
    ];
    
    return (
      <button className="flex gap-[.8rem] items-center"
       onMouseEnter={()=>setShow(true)}
       onMouseLeave={()=>setShow(false)}
       >
        <span
          className="font-medium block max-w-[7rem] whitespace-nowrap overflow-hidden text-ellipsis"
          title={user.nombre}
        >
          {user.nombre}
        </span>
        <FontAwesomeIcon icon={faChevronRight} />
        <div className={`pl-[1rem] absolute cursor-auto transition-all duration-200 right-[-8.5rem] ${show?'opacity-1 pointer-events-auto translate-x-[1rem]':'opacity-0 pointer-events-none translate-x-[0]'} min-h-[100%] flex items-stretch`}>
         <ul className={`shadow-lg flex flex-col justify-center`}>
           {
             optionList.map((opt,pos)=>
                {
                    return(
                       <UserOption key={pos} {...opt}/> 
                    )
                })
           }
         </ul>
        </div>
      </button>
    );
}

const UserOption=(props:optionList)=>
{
  const{label}=props
    
  return (
    <li>
      <button className='bg-myWhite block min-w-[9rem] text-myText hover:bg-myBlack hover:text-myWhite transition-all duration-200'>
        <span>{label}</span>
      </button>
    </li>
  );
}

export default UserMenuUltimate