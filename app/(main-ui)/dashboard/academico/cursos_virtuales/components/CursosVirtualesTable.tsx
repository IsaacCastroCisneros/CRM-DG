"use client"

import React from 'react'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import cursosVirtualesColumns from '../helpers/cursosVirtualesColumns'
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from 'next/navigation'
import { MyButton } from '@/components/MyButton/MyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MyLink } from '@/components/MyLink/MyLink'


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
  const path = usePathname()||''

  return (
    <TheDataTable
      data={data}
      columns={cursosVirtualesColumns}
      buttons={
        <MyLink href={`${path}/new`} className='h-[50px] w-[147px] font-semibold text-[18px]'>
          <FontAwesomeIcon size="lg" icon={faPlusCircle} /> Nuevo
        </MyLink>
      }
    />
  );
}

export default CursosVirtualesTable
