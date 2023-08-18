"use client"
import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import examenesColumns from '../helpers/examenesColumns'

const data=
[
  {
    alumno:'fernanda',
    promedio:'20/10'
  },
  {
    alumno:'fernanda',
    promedio:'20/10'
  }
]

export const ClientContent = () => 
{
  return (
    <MyBlock title='Examenes' subtitle='ELABORACIÓN DE INSTRUMENTOS' >
        <TheDataTable data={data} columns={examenesColumns} />
    </MyBlock>
  )
}
