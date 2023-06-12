"use client"

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React, { useState } from 'react'
import Program from './components/Program/Program'
import MyFilters from '@/components/MyFilters/MyFilters'
import MyAlumnosOptions from './components/MyAlumnosOptions/MyAlumnosOptions'
import unifiedStyle from '@/helpers/unifiedStyle'

const columns = unifiedStyle([
  {
    name:'Nombre de Programa',
    cell:(row:any)=><Program row={row}/>
  },
  {
    name:'Categoria',
    selector: (row:any) => row.categoria,
  },
  {
    name:'Modalidad',
    selector:(row:any)=>row.modalidad,
  },
  {
    name:'Alumnos',
    cell:(row:any)=>row.alumnos
  },
  {
    name:'Acciones',
    cell:(row:any)=><MyAlumnosOptions row={row} />
  }
])


const data=
[
   {
    id:'5422',
     program:
     {
        name:'Sistema integrado de Gestion SIGA',
        img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
     },
     categoria:'Curso',
     modalidad:'Dual',
     alumnos:50,
   },
   {
    id:'5445',
    program:
    {
       name:'Sistema integrado de Gestion SIGA',
       img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
    },
    categoria:'Diploma',
    modalidad:'Presencial',
    alumnos:15,
  },
  {
    id:'gtr5',
    program:
    {
       name:'Sistema integrado de Gestion SIGA',
       img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
    },
    categoria:'Curso',
    modalidad:'Dual',
    alumnos:30,
  },
  {
    id:'54',
    program:
    {
       name:'Sistema integrado de Gestion SIGA',
       img:'https://ipappg.edu.pe/blog/wp-content/uploads/2022/05/siaf-sin-fondo-logo.png'
    },
    categoria:'Curso',
    modalidad:'Virtual',
    alumnos:15,
  } 
]

const Page=()=> 
{
  const[myFilter,setMyFilter]=useState({value:'',property:''})  
  
  return (
    <MyBlock title="Programas por Alumno">
      <TheDataTable
        columns={columns}
        data={data}
        myFilter={myFilter}
        buttons={
          <MyFilters
            filters={[
              {
                label: "Modalidad",
                options: ["Dual", "Presencial", "Virtual"],
              },
            ]}
            setMyFilter={setMyFilter}
          />
        }
      />
    </MyBlock>
  );
}

export default Page
