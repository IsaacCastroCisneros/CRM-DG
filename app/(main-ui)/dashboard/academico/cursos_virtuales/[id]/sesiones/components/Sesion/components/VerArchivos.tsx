"use client"

import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { v4 as uuidv4 } from 'uuid';
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFileCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';

interface file
{file:File,id:string}

export const VerArchivos = () => 
{
  const[values,setValues]=useState<Array<file>>([])  

  function gettingTheFiles(list:FileList)
  {
    const files = Object.values(list)
    const filesArr:Array<file>= files.map(f=>{return {file:f,id:uuidv4()}} )
    setValues(prev=>{return[...prev,...filesArr]})
  }

  return (
    <>
      <MyForm
        label="Guardar"
        submit={async () => null}
        fragment={
          <>
            {values.length > 0 && (
              <div>
                <ul className="flex flex-col gap-[.2rem] max-h-[30rem] overflow-y-auto my-[1rem]">
                  {values.map((v) => (
                    <File key={v.id} {...v} setValues={setValues} />
                  ))}
                </ul>
                <button
                  className="capitalize bg-red-400 px-[1rem] py-[.8rem] text-[#fff] rounded-[.5rem] gap-[.5rem] font-bold flex items-center"
                  type="button"
                  onClick={() => setValues([])}
                >
                  <FontAwesomeIcon size="2xl" icon={faFileCircleXmark} />
                  Borrar todo
                </button>
              </div>
            )}
          </>
        }
      >
        <MyFormInput
          type="file"
          multiple
          onChange={(e) => gettingTheFiles(e.target.files)}
        />
      </MyForm>
    </>
  );
}

interface props extends file
{
  setValues:Dispatch<SetStateAction<Array<file>>>
}

function File(props:props)
{
  const{name}=props.file
  const{setValues,id}=props

  function deletingFile(id:string)
  {
    setValues(prev=>
      {
        return prev.filter(p=>p.id!==id)
      })
  }

  return (
    <li className="flex items-center bg-slate-700 text-[#fff] px-[.5rem] py-[.4rem] gap-[.6rem] rounded-[.5rem]">
      <FontAwesomeIcon icon={faFile} />
      <span>{name}</span>
      <button onClick={()=>deletingFile(id)} ><FontAwesomeIcon icon={faXmark}/></button>
    </li>
  );
}