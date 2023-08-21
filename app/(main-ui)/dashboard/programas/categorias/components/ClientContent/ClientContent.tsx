"use client"

import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import categoriaColumns from './helpers/categoriaColumns'
import { usePathname } from 'next/dist/client/components/navigation'
import useMyFilter from '@/hooks/useMyFilter'
import MyFilters from '@/components/MyFilters/MyFilters'

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
  const{setMyFilter,filteredData}=useMyFilter(data)

  return (
    <TheDataTable
      buttons={
        <MyFilters
          filters={[
            {
              label: "status",
              labelOnScreen: "estado",
              options: [{value:"true",label:"activo"},{value:"false",label:"inactivo"}],
            },
          ]}
          setMyFilter={setMyFilter}
        />
      }
      columns={categoriaColumns}
      data={filteredData}
    />
  );
}
