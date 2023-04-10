'use client'
import Popup from '@/components/Popup/Popup'
import { appContext } from '@/context/AppContenxt'
import React, { useContext } from 'react'

export default function MyPopUp() 
{
  const{showPopup,setShowPopup}=useContext(appContext) 

  return (
      <Popup show={showPopup.show} popup={showPopup.popup} setShowPopup={setShowPopup} />
  );
}
