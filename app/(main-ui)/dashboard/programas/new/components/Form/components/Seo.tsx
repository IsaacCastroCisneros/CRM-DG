"use client"
import { FormFileInputSimple } from '@/components/FormFileInputSimple/FormFileInputSimple'
import React, { useContext } from 'react'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { CustomSelector } from '@/components/CustomSelector/CustomSelector'
import { context } from '../Form'

export const Seo = () => 
{
  const{program,updateProgram}=useContext(context)
  
  return (
    <>
      <CustomSelector name="Meta (Palabras Claves)" items={program.meta} updateProgram={(items)=>updateProgram({...program,meta:items})}/>
      <MyFormInput
        type="textarea"
        value={program.metaDescripcion}
        name="metaDescripcion"
        onChange={(e) =>
          updateProgram({ ...program, metaDescripcion: e.target.value })
        }
      />
      <FormFileInputSimple value={program.metaImagen} name="Meta Imagen" />
    </>
  );
}
