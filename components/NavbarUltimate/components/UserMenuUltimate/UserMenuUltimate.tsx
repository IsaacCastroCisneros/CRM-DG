'use client'

import { appContext } from '@/context/AppContenxt'
import user from '@/interfaces/user';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import postRequest from '@/helpers/postRequest';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react'

export default function UserMenuUltimate() 
{
  const{user,setUser}=useContext(appContext)  

  return (
    <>
      {user && (
        <div className='flex items-center px-[20.8px] gap-[1rem]'>
          {/* <section className='relative flex items-stretch'>
             <UserOptionMenu user={user} setUser={setUser}/>
          </section> */}
          <strong>
            {user.nombre}
          </strong>
          <div className="w-[50px] h-[50px] rounded-[100%] overflow-hidden">
            <img src={user.avatar} className="object-cover" />
          </div>
          <button
           className='text-myBlack'
           onClick={() => {
            const form = new FormData();
            form.append("token", user ? user.token : "");
            postRequest(form, "logout").then((res) => console.log(res));
            if (user) {
              setUser({ ...user, isLogin: false });
            }
          }}
           >
             <FontAwesomeIcon size='xl' icon={faRightFromBracket} />
          </button>
        </div>
      )}
    </>
  );
}

interface optionList
{
    label:string;
    icon:IconProp;
    func?:()=>void
}

function UserOptionMenu({user,setUser}:{user:user,setUser:Dispatch<SetStateAction<user | undefined>>})
{
    const[show,setShow]=useState<boolean>(false)

    const optionList:Array<optionList>= [
      {
        label: "sign out",
        icon: faRightFromBracket,
        func: () => {
          const form = new FormData();
          form.append("token", user ? user.token : "");
          postRequest(form, "logout").then((res) => console.log(res));
          if (user) {
            setUser({ ...user, isLogin: false });
          }
        },
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

function UserOption(props:optionList)
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