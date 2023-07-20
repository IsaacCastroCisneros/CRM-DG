"use client"

import React from 'react'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import cursosVirtualesColumns from '../helpers/cursosVirtualesColumns'

const data =
[
  {
    img:'/img/cer.webp',
    type:'curso',
    titulo:'siaf',
    mode:'dual',
    sessions:'5',
    status:true,
    students:'50',
    price:'200',
    destacado:true,
    created:'07/12/28'
  },
]

const CursosVirtualesTable = () => 
{

  return (
    <TheDataTable
      data={data}
      columns={cursosVirtualesColumns}
    />
  );
}

export default CursosVirtualesTable
