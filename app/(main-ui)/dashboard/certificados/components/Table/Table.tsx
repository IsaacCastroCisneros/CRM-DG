"use client"

import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import columns from './helpers/columns/columns'
import { MyButton } from '@/components/MyButton/MyButton'
import { faFileExcel } from '@fortawesome/free-solid-svg-icons'
import { ExportExcel } from '@/helpers/ExportExcel'
import { MyLink } from '@/components/MyLink/MyLink'

const data=
[
  {
    id:"1",
    name:"Jose",
    dni:"999999",
    program:"SIAF",
    status:"aula virtual",
    fecha:"17/07/2023"
  },
  {
    id:"2",
    name:"Lucas",
    dni:"999999",
    program:"SIAF",
    status:"entregado",
    fecha:"17/07/2023"
  },
  {
    id:"3",
    name:"Johnny",
    dni:"999999",
    program:"SIAF",
    status:"olva",
    fecha:"17/07/2023"
  },
  {
    id:"4",
    name:"Luis",
    dni:"999999",
    program:"SIAF",
    status:"oficina",
    fecha:"17/07/2023"
  },
  {
    id:"5",
    name:"Lisa",
    dni:"999999",
    program:"SIAF",
    status:"pendiente",
    fecha:"17/07/2023"
  }
]


export default function Table() 
{


  return (
    <TheDataTable
      data={data}
      columns={columns}
      buttons={
        <div className="flex gap-[1rem]">
          <MyButton
            noWidth
            icon={faFileExcel}
            className="bg-myGreen"
            onClick={() => ExportExcel(data)}
          >
            Descargar Excel
          </MyButton>
          <MyLink href="/dashboard/certificados/massive">Registro Masivo</MyLink>
        </div>
      }
    />
  );
}
