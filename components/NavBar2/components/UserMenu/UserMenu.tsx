import React, { useEffect, useState } from 'react'
import UserDropDown from './components/UserDropDown/UserDropDown';
import user from '@/interfaces/user';
import clicking from '@/helpers/clicking';

export default function UserMenu({user}:{user:user}) 
{ 
  const{avatar,nombre,tipo}=user
  const[show,setShow]=useState<boolean>(false)

  useEffect(()=>
  {
    window.addEventListener('click',(e)=>clicking(e,'.user-button','.user-container',setShow))

    return ()=>window.removeEventListener('click',(e)=>clicking(e,'.user-button','.user-container',setShow))
  })

  const myElipsis='whitespace-nowrap overflow-hidden text-ellipsis max-w-[6.2rem]'

  return (
    <div className='relative h-[100%]'>
      <button className="flex text-[#98a6ad] items-center user-button bg-bgHover h-[100%] px-[15px] gap-[.6rem] w-[172.95px]"
       onClick={()=>setShow(prev=>!prev)}
       >
        <img src={avatar} className="h-[32px] w-[32px] rounded-[100%]" />
        <section className="flex-1 text-left">
          <span className={`font-medium text-[14px] ${myElipsis}`}>
            {nombre}
          </span>
          <p className={`text-[12px] capitalize ${myElipsis}`}>
            {tipo.toLowerCase()}
          </p>
        </section>
      </button>
      <UserDropDown show={show}/>
    </div>
  );
}
