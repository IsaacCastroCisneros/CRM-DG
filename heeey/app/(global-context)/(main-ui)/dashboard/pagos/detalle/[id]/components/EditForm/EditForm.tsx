'use client'

import popup from '@/interfaces/popup'
import { faClockRotateLeft, faListUl, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import MyButton from './components/MyButton/MyButton'
import DetallePrograma from './components/DetallePrograma/DetallePrograma'
import ActualizarPago from './components/ActualizarPago/ActualizarPago'

export default function EditForm({setShowPopup}:{setShowPopup:React.Dispatch<React.SetStateAction<popup>>}) 
{
  const[show,setShow]=useState<'actualizar'|'detalles'>('actualizar')

  return (
    <div className="flex flex-col relative bg-white w-[50rem] max-w-[100%] rounded-[.5rem] overflow-hidden transition-all duration-200">
      <section className="text-myWhite bg-[#97B1F7] flex relative">
        <MyButton
          label="Actualizar Pago"
          setShow={setShow}
          show={show}
          icon={faClockRotateLeft}
        />
        <MyButton
          label="Detalle Programa"
          setShow={setShow}
          show={show}
          icon={faListUl}
          type={"detalles"}
        />
        <button
         className='absolute right-[2rem] top-[50%] translate-y-[-50%]'
         onClick={()=>setShowPopup(prev=>{return{...prev,show:false}})}
         >
          <FontAwesomeIcon size='xl' icon={faXmark}/>
        </button>
      </section>
      <div className="pt-[3rem] px-[2.5rem] pb-[1.7rem] text-myBlack">
        {show === "actualizar" && <ActualizarPago />}
        {show === "detalles" && <DetallePrograma />}
      </div>
    </div>
  );
}

