'use client'

import Popup from '@/components/Popup/Popup'
import { appContext } from '@/context/AppContenxt'
import React, { useContext } from 'react'

const MyPopUp=()=> 
{
  const{showPopup,setShowPopup}=useContext(appContext) 

  return (
      <Popup show={showPopup.show} popup={showPopup.popup} setShowPopup={setShowPopup} />
  );
}

export default MyPopUp