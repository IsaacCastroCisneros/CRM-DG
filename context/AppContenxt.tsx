'use client'

import React, { useState } from 'react'
import appContextValues from '@/interfaces/appContextValues';
import popup from '@/interfaces/popup';
import appContext from './appContext';
import noti from '@/interfaces/noti';


const AppContenxt=({children}:{children:any})=> 
{
  const[showPopup,setShowPopup]=useState<popup>({show:false,popup:<></>})
  const[showNoti,setShowNoti]=useState<noti>({show:false,type:'success'})

  const values:appContextValues = 
  {
    showPopup,
    setShowPopup,
    showNoti,
    setShowNoti
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