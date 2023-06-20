"use client"

import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useContext, useState } from 'react'
import exameColumns from '../helpers/examenColums'
import appContext from '@/context/appContext'

export const ExamenesTable = () => 
{

  return (
    <div className="flex w-[100%] justify-between gap-[2rem]">
      <ExamenBlock title='Examen Tipo Test' data={[{titulo:'si',fecha:'06/25/2023'}]}/>
      <ExamenBlock title='Examenes tipo orden' data={[]}/>
    </div>
  );
}

interface props
{
    title:string,
    data:Array<any>
}

function ExamenBlock({title,data}:props)
{
  const{setShowPopup}=useContext(appContext)

  return (
    <section className="block flex-1">
      <div className="flex w-[100%] justify-between capitalize">
        <strong className=" text-slate-600 text-[1.2rem]">{title}</strong>
        <MyButtonLink
          label="Nuevo"
          className='flex gap-[.5rem]'
          icon={faPlusCircle}
          onClick={() => setShowPopup({ show: true, popup: <>fdfd</> })}
        />
      </div>
      <TheDataTable data={data} columns={exameColumns} />
    </section>
  );
}