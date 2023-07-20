"use client"

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React, { useState } from 'react'
import MyFilters from '@/components/MyFilters/MyFilters'
import filter from '@/interfaces/filter'
import columns from './helpers/columns/columns'

const data=
[
   {
    id:'5422',
     program:
     {
        name:'Sistema integrado de Gestion SIGA',
        img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
     },
     categoria:'curso',
     modalidad:'dual',
     alumnos:50,
   },
   {
    id:'5445',
    program:
    {
       name:'Sistema integrado de Gestion SIGA',
       img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
    },
    categoria:'diploma',
    modalidad:'presencial',
    alumnos:15,
  },
  {
    id:'gtr5',
    program:
    {
       name:'Sistema integrado de Gestion SIGA',
       img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
    },
    categoria:'curso',
    modalidad:'dual',
    alumnos:30,
  },
  {
    id:'54',
    program:
    {
       name:'Sistema integrado de Gestion SIGA',
       img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
    },
    categoria:'curso',
    modalidad:'virtual',
    alumnos:15,
  } 
]

const Page=()=> 
{
  const[myFilter,setMyFilter]=useState<Array<filter>>([{value:'',property:''}])  

  return (
    <MyBlock title="Programas por Alumno">
      <TheDataTable
        columns={columns}
        data={data}
        myFilter={myFilter}
        newButton={false}
        buttons={
          <MyFilters
            filters={[
              {
                label: "modalidad",
                options: ["dual", "presencial", "virtual"],
              },
              {
                label: "categoria",
                options: ["diploma", "curso"],
              },
            ]}
            setMyFilter={setMyFilter}
            myFilters={myFilter}
          />
        }
      />
    </MyBlock>
  );
}

export default Page
