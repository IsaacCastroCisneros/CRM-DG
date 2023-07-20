"use client"

import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import categoriaColumns from './helpers/categoriaColumns'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { MyLink } from '@/components/MyLink/MyLink'
import { usePathname } from 'next/dist/client/components/navigation'

const data=
[
  {
    name:'Desarrollo Personal',
    status:false,
  },
  {
    name:'Marketing Digital',
    status:true,
  },
]

export default function ClientContent() 
{
  const path = usePathname()

  return (
    <TheDataTable
      columns={categoriaColumns}
      data={data}
    />
  );
}
