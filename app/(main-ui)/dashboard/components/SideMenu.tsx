"use client"

import appContext from '@/context/appContext'
import useClickOutside from '@/hooks/useClickOutside'
import React, { useContext } from 'react'


export default function SideMenu() 
{
  const{setShowSideMenu,showSideMenu}=useContext(appContext)

  const{ref}=useClickOutside(()=>
  {
    if(showSideMenu.show)
    {
       setShowSideMenu(prev=>{return {...prev,show:false}})
    }
  })

  return (
    <div ref={ref} className='fixed my-shadow bg-[#fff] right-0 duration-150 ease-in-out w-[30rem] h-[100vh] z-[99999999999] py-[1.5rem] px-[1rem]'
     style={
      {
        pointerEvents:showSideMenu.show?'auto':'none',
        transform:showSideMenu.show?'translateX(0)':'translateX(100%)'
      }
    }
     >
       {
         showSideMenu.content
       }
    </div>
  )
}
