"use client"

import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import columns from './helpers/columns/columns'

const data=
[
  {
    cod:"1",
    name:"SIAF",
    type:"Curso",
    status:"aprobado",
    average:"15",
  },
  {
    cod:"1",
    name:"SIAF",
    type:"diploma",
    status:"desaprobado",
    average:"08",
  }
]

export default function Table() 
{
  return (
    <TheDataTable data={data} columns={columns} newButton={false} />
  )
}
