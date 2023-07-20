'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import registroEnvio from './interface/registroEnvio'
import columns from './helpers/columns'



interface user {
  dni: string;
  correo: string;
  user: string;
  nombre: string;
  telefono: string;
  registroEnvio:Array<registroEnvio>;
  status:boolean;
  certificado:string
}

const data:Array<user>=
[
  {
    dni:'999999',
    correo:'fdfd',
    user:'https://archivos-comunes.s3.amazonaws.com/2022/asesores/LUCERO+ALCANTARA.png',
    nombre:'hola',
    telefono:'5555555',
    registroEnvio:
    [{
      direccion:'yooo',
      referencia:'siii',
      distrito:'lel',
      provincia:'lel',
      departamento:'leeel'
    }],
    certificado:'nombre',
    status:false
  },
  {
    dni:'999999',
    correo:'fdfd',
    user:'https://archivos-comunes.s3.amazonaws.com/2022/asesores/LUCERO+ALCANTARA.png',
    nombre:'fdfd',
    telefono:'5555555',
    registroEnvio:
    [{
      direccion:'yooo',
      referencia:'lel',
      distrito:'lel',
      provincia:'lel',
      departamento:'leeel'
    }],
    certificado:'nombre',
    status:true
  },
  {
    dni:'888888',
    correo:'fdfd',
    user:'https://archivos-comunes.s3.amazonaws.com/2022/asesores/LUCERO+ALCANTARA.png',
    nombre:'fdfd',
    telefono:'5555555',
    registroEnvio:[
      {
        direccion:'yooo',
        referencia:'lel',
        distrito:'lel',
        provincia:'lel',
        departamento:'leeel'
      }
    ],
    certificado:'nombre',
    status:true
  }
]

const page=()=> 
{

  return (
    <MyBlock title='Envios'>
     <TheDataTable columns={columns} data={data} newButton={false} />
    </MyBlock>
  )
}

export default page

