'use client'

import RegularPopup from '@/components/RegularPopup/RegularPopup'
import React from 'react'
import registroEnvio from '../../../interface/registroEnvio'



export default function EditDataEnvio({user}:{user:any}) {
  return (
    <RegularPopup title={`Datos de envio del usuario ${user.nombre}`} content={<MyForm user={user} registroEnvio={user.registroEnvio[0]} />} />
  )
}

function MyForm({registroEnvio,user}:{registroEnvio:registroEnvio,user:any})
{
    return (
      <>
        <div className='w-[100%] flex flex-col items-center mb-[1rem]'>
           <img className='block w-[3rem] h-[3rem] rounded-[100%]' src={user.user} alt="" />
           <span>
              {user.nombre}
           </span>
           <div className='w-fit flex bg-slate-600 text-[#fff] rounded-[.3rem] border-[1px] border-myBorder px-[.5rem] py-[.2rem] items-center gap-[2rem]'>
              <span>
                {user.certificado}
              </span>
              <span className='flex items-center gap-[.2rem]'>
                <p className={`block w-[5px] h-[5px] rounded-[100%] ${user.status ? 'bg-green-500':'bg-yellow-500'}`} ></p>
                <p>{user.status?'Enviado':'Pendiente'}</p>
              </span>
           </div>
        </div>
      <div className='flex flex-col'>
        <Field label='Direccion' data={registroEnvio.direccion} />
        <Field label='Referencia' data={registroEnvio.referencia} />
        <Field label='Distrito' data={registroEnvio.distrito} />
        <Field label='Provincia' data={registroEnvio.provincia} />
        <Field label='Departamento' data={registroEnvio.departamento} />
      </div>
      </>
    );
}

function Field({data,label}:{data:string,label:string})
{
  return(
    <div className='flex'>
      <strong>{`${label}:`}&nbsp;</strong>
      <p>{data}</p>
    </div>
  )
}