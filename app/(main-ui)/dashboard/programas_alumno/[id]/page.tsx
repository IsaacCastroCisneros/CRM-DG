'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import unifiedStyle from '@/helpers/unifiedStyle'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import {MyLink} from '@/components/MyLink/MyLink'

const columns = unifiedStyle([
  {
    name: "DNI",
    cell: (row: any) => row.dni,
  },
  {
    name: "Correo",
    selector: (row: any) => row.email,
  },
  {
    name: "Nombre",
    selector: (row: any) => row.name,
  },
  {
    name: "Telefono",
    cell: (row: any) => row.phone,
  },
  {
    name: "Estado Programa",
    cell: (row: any) => (
      <div
        className={`px-[1rem] py-[.7rem] ${getStatus(
          row.status
        )} w-[100%] text-[#fff] text-center rounded-[.2rem]`}
      >
        <span className='font-medium'>
          {row.status}    
        </span> 
      </div>
    ),
  },
  {
    name: "Historial",
    cell: () => (
      <Link href={""}>
        <FontAwesomeIcon
          size="2xl"
          className="text-myBorderDark"
          icon={faClipboard}
        />
      </Link>
    ),
  },
  {
    name: "User",
    cell: (row: any) => (
      <img src={row.img} className="w-[2rem] h-[2rem] rounded-[100%]" alt="" />
    ),
  },
  {
    name: "Fecha",
    cell: (row: any) => row.date,
  },
]);

function getStatus(status:'culminado'|'en curso'|'no iniciado')
{
   switch(status)
   {
     case 'culminado':
        {
            return 'bg-blue-500'
        }
    case 'en curso':
        {
            return 'bg-green-500'
        }
    case 'no iniciado':
        {
            return 'bg-red-500'
        }
    default :''
   }
}

const data=
[
   {
     dni:'70368870',
     email:'dfdfd@gmail.com',
     name:'isaac castro',
     phone:'9435454',
     status:'culminado',
     img:'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/spinner-dolphin-profile-photo-by-barry-fackler.jpg',
     date:'15/09/2023'
   },
   {
    dni:'70368870',
    email:'dfdfd@gmail.com',
    name:'isaac castro',
    phone:'9435454',
    status:'no iniciado',
    img:'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/spinner-dolphin-profile-photo-by-barry-fackler.jpg',
    date:'15/09/2023'
  },
  {
    dni:'70368870',
    email:'dfdfd@gmail.com',
    name:'isaac castro',
    phone:'9435454',
    status:'culminado',
    img:'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/spinner-dolphin-profile-photo-by-barry-fackler.jpg',
    date:'15/09/2023'
  },
  {
    dni:'70668870',
    email:'dfgfdfd@gmail.com',
    name:'isaac castro',
    phone:'94354354',
    status:'en curso',
    img:'https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/spinner-dolphin-profile-photo-by-barry-fackler.jpg',
    date:'15/09/2023'
  }
]

const Page=({params}:any)=> 
{
  const{id}=params

  return (
    <MyBlock title="Lista de Alumnos de Programa">
      <TheDataTable
        columns={columns}
        data={data}
        buttons={
          <MyLink href={`/dashboard/programas_alumno/${id}/alumnos/new`}>
            + Agregar Alumno
          </MyLink>
        }
      />
    </MyBlock>
  );
}

export default Page
