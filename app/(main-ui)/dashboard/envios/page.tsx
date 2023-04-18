'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import MyOptions from './components/MyOptions/MyOptions'
import StatusEnvio from './components/StatusEnvio/StatusEnvio'
import registroEnvio from './interface/registroEnvio'

const columns =
[
  {
    name:'Certificado',
    cell:(row:any)=>row.certificado
  },
/*   {
    name:'DNI',
    selector: (row:any) => row.dni,
  },
  {
    name:'Correo',
    selector: (row:any) => row.correo,
  }, */
  {
    name:'Nombre',
    selector: (row:any) => row.nombre,
  },
  {
    name:'Usuario',
    selector:(row:any)=><img src={row.user} className="w-[3rem] h-[3rem] rounded-[100%] block"/>,
  },
 /*  {
    name:'Telefono',
    selector: (row:any) => row.telefono,
  }, */
  {
    name:'Estado',
    cell:(row:any)=><StatusEnvio exist={row.status}/>
  },
  {
    name:'Opciones',
    cell:(row:any)=><MyOptions user={row} />
  }
]

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
    user:'https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg',
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
    user:'https://media.gettyimages.com/id/88500538/es/foto/bottle-nosed-dolphin-jumping.jpg?s=612x612&w=gi&k=20&c=G8OypwOt8tPATL6L-h8eBga8VxdodqbRyeQvz417TYA=',
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
    user:'https://media.gettyimages.com/id/88500538/es/foto/bottle-nosed-dolphin-jumping.jpg?s=612x612&w=gi&k=20&c=G8OypwOt8tPATL6L-h8eBga8VxdodqbRyeQvz417TYA=',
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
     <TheDataTable columns={columns} data={data} />
    </MyBlock>
  )
}


