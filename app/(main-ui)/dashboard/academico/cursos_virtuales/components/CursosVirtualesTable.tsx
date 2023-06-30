"use client"

import React from 'react'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import cursosVirtualesColumns from '../helpers/cursosVirtualesColumns'
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'


const data =
[
  {
    id:'1',
    codigo:'4334',
    titulo:'ESPECIALIZACION EN CONTRATACIONES PUBLICAS',
    precio:'420',
    profesores:'Jose',
    fechaInicio:'2020/05/05',
    fechaFin:'2023/05/05'
  },
]

const CursosVirtualesTable = () => 
{
  const path = usePathname()||''

  return (
    <TheDataTable
      data={data}
      columns={cursosVirtualesColumns}
      buttons={
        <MyButtonLink label="Nuevo" icon={faPlusCircle} href={`${path}/new`} />
      }
    />
  );
}

export default CursosVirtualesTable
