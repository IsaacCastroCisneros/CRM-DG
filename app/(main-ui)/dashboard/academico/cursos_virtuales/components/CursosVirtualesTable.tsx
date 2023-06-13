"use client"

import React from 'react'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import cursosVirtualesColumns from '../helpers/cursosVirtualesColumns'


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

const CursosVirtualesTable = () => {
  return (
    <TheDataTable data={data} columns={cursosVirtualesColumns} />
  )
}

export default CursosVirtualesTable
