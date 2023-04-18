'use client'

import React, { useState } from 'react'
import appContextValues from '@/interfaces/appContextValues';
import popup from '@/interfaces/popup';
import appContext from './appContext';


const AppContenxt=({children}:{children:any})=> 
{
  const[showPopup,setShowPopup]=useState<popup>({show:false,popup:<></>})

  const values:appContextValues = 
  {

    showPopup,
    setShowPopup
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