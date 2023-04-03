'use client'

import { navBar2Context } from '@/components/NavBar2/NavBar2';
import postRequest from '@/helpers/postRequest';
import { faUser,faGear,faLifeRing,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import UserDropDownOption from './components/UserDropDownOption';

export default function UserDropDown({show}:{show:boolean})
{
  const{user,setUser}=useContext(navBar2Context)

  const optList=
  [
    {
      icon:faUser,
      label:'Mi Aula',
      path:'/'
    },
    {
      icon:faGear,
      label:'Mi Perfil',
      path:'/'
    },
    {
      icon:faLifeRing,
      label:'Mis Cursos',
      path:'/'
    },
    {
      icon:faRightFromBracket,
      label:'Cerrar Sesion',
      isLink:false,
      onClick:()=>{
        const form = new FormData();
        form.append("token", user ? user.token : "");
        postRequest(form, "logout").then((res) => console.log(res));
        if(user)
        {
          setUser({...user,isLogin:false})
        }
      }  
    },
  ]

  return (
    <ul className={`absolute z-[9999] text-[#6c757d] bg-[#fff] flex flex-col pt-[1rem] shadow-lg rounded-[.3rem] overflow-hidden translate-x-[-1rem] transition-all duration-200 ${show ? 'opacity-1 pointer-events-auto translate-y-[0]':'opacity-0 pointer-events-none translate-y-[-1rem]'}`} >
       <span className='font-medium pb-[1rem] px-[1.5rem] text-[12px] user-container'>
          Welcome !
       </span>
       {
         optList.map((opt,pos)=>
          {
            return (
              <UserDropDownOption key={pos} {...opt}/>
            )  
          })
       }
    </ul>
  )
}


