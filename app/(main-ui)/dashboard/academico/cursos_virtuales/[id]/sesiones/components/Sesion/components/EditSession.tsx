'use client'

import { MyEditor } from '@/components/MyEditor/MyEditor';
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import { MyForm } from '@/components/MyForm/MyForm';
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import React,{useState} from 'react'

export const EditSession=()=>
{ 
  const[values,setValues]= useState(
    {
        titulo:'',
        tipoSesion:'',
        nombreSesion:'',
        contenidoSesion:'',
        fecha:'',
        hora:'',
        horaFin:'',
        stream:'',
        url:'',
        editada:'',
        idVideoClaseEnvivo:'',
        profesor:'',
        tomarAsistencia:'',
        gratis:''
    })  

    console.log(values)

  return (
    <MyForm
      submit={async()=>null}
      label='Guardar Cambios'
      >
      <MyFlexContainer>
        <MyFormInput
          name="titulo"
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, titulo: e.target.value };
            })
          }
        />
        <MyFormInput
          name="tipoSesion"
          options={["si", "no"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, tipoSesion: e.target.value };
            })
          }
        />
      </MyFlexContainer>
      <MyFormInput
        name="nombreSesion"
        className='mb-[.7rem]'
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, nombreSesion: e.target.value };
          })
        }
      />
      <MyEditor label={"Contenido de Sesion:"} onChange={(e)=>setValues(prev=>{return{...prev,contenidoSesion:e.target.getContent()}})} />
      <MyFlexContainer className='mt-[.7rem]'>
        <MyFormInput
          name="fecha"
          type='date'
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, fecha: e.target.value };
            })
          }
        />
        <MyFormInput
          name="hora"
          type='time'
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, hora: e.target.value };
            })
          }
        />
        <MyFormInput
          name="horaFin"
          type='time'
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, horaFin: e.target.value };
            })
          }
        />
        <MyFormInput
          name="stream"
          options={["AULA", "ZOOM","BBB","AULA Y ZOOM","BBB Y ZOOM"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, stream: e.target.value };
            })
          }
        />
      </MyFlexContainer>
      <MyFormInput
        name="url"
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, url: e.target.value };
          })
        }
      />
      <MyFormInput
        name="editada"
        options={["Si", "No"]}
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, editada: e.target.value };
          })
        }
      />
      <MyFormInput
        name="idVideoClaseEnvivo"
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, id: e.target.value };
          })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          name="profesor"
           options={["si", "no"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, profesor: e.target.value };
            })
          }
        />
        <MyFormInput
          name="tomarAsistencia"
           options={["Si", "No"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, tomarAsistencia: e.target.value };
            })
          }
        />
        <MyFormInput
          name="gratis"
           options={["Si", "No"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, gratis: e.target.value };
            })
          }
        />
      </MyFlexContainer>
    </MyForm>
  );
}
