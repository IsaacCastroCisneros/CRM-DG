'use client'

import UserMenu from './components/UserMenu/UserMenu'
import { appContext } from '@/context/AppContenxt'
import React, { useContext } from 'react'
import SearchBar from './components/SearchBar/SearchBar'
import SearchBarMob from './components/SearchBarMob/SearchBarMob'
import appContextValues from '@/interfaces/appContextValues'
import Link from 'next/link'

export const navBar2Context=React.createContext<appContextValues>({user:
  {
   avatar:'',
   correo:'',
   id:'no-user',
   nombre:'',
   tipo:'',
   token:'',
  },
  setUser:()=>null  
});



export default function NavBar2() 
{
  const{user,setUser}=useContext<appContextValues>(appContext)

  const values=
  {
    user,setUser
  }

  return (
    <navBar2Context.Provider value={values}>
      <nav className="my-container relative flex items-center h-[70px] justify-between">
        <Link href={"/"}>
          <img src="/imgs/logo-nav-bar.png" className="w-[10rem]" alt="" />
        </Link>
        <div className="h-[100%] flex items-center gap-[1rem]">
          <SearchBar />
          <SearchBarMob />
          {user && <UserMenu user={user} />}
        </div>
      </nav>
    </navBar2Context.Provider>
  );  
}


  