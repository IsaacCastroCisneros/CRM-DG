'use client'

import React, { ReactNode, useState } from 'react'
import appContextValues from '@/interfaces/appContextValues';
import popup from '@/interfaces/popup';
import appContext from './appContext';
import noti from '@/interfaces/noti';
import sideMenu from '@/interfaces/sideMenu';


const AppContenxt=({children}:{children:ReactNode})=> 
{
  const[showPopup,setShowPopup]=useState<popup>({show:false,popup:<></>})
  const[showSideMenu,setShowSideMenu]=useState<sideMenu>({show:false,content:<></>})
  const[showNoti,setShowNoti]=useState<noti>({show:false,type:'success'})

  const values:appContextValues = 
  {
    showPopup,
    setShowPopup,
    showNoti,
    setShowNoti,
    setShowSideMenu,
    showSideMenu
  }

  return (
    <appContext.Provider 
     value=
     {
      values
     }
     >
      {children}
    </appContext.Provider>
  )
}


export default AppContenxt