"use client"

import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useState } from 'react'

export const AsignarTarea = () => {
  
  const[values,setValues]=useState(
   {
    titulo:'',
    decripcion:'',
    iniciaFecha:'',
    iniciaHora:'',
    terminaFecha:'',
    terminaHora:'',
    archivo:undefined
   }
  )
  
  return (
    <MyForm label="Guardar" submit={async () => null}>
      <MyFormInput
        value={values.titulo}
        name={"titulo"}
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, titulo: e.target.value };
          })
        }
      />
      <MyFormInput
        value={values.decripcion}
        name={"decripcion"}
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, decripcion: e.target.value };
          })
        }
        type='textarea'
      />
      <MyFlexContainer>
        <MyFormInput
          value={values.iniciaFecha}
          name={"iniciaFecha"}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, iniciaFecha: e.target.value };
            })
          }
        />
        <MyFormInput
          value={values.iniciaHora}
          name={"iniciaHora"}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, iniciaHora: e.target.value };
            })
          }
        />
      </MyFlexContainer>
      <MyFlexContainer>
        <MyFormInput
          value={values.terminaFecha}
          name={"terminaFecha"}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, terminaFecha: e.target.value };
            })
          }
        />
        <MyFormInput
          value={values.terminaHora}
          name={"terminaHora"}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, terminaHora: e.target.value };
            })
          }
        />
      </MyFlexContainer>
       <MyFormInput name='archivo' type='file' file={values.archivo} onChange={(e)=>setValues(prev=>{return{...prev,archivo:e.target.files}})} />
    </MyForm>
  );
}
