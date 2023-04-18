'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import NewButton from '@/components/NewButton/NewButton'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import { appContext } from '@/context/AppContenxt'
import React, {useContext, useState } from 'react'
import MyFilters from './components/MyFilters/MyFilters'
import MyOptions from './components/MyOptions/MyOptions'
import NewUser from './components/NewUser/NewUser'
import NewUserLite from './components/NewUserLite/NewUserLite'

const columns =
[
  {
    name:'DNI',
    selector: (row:any) => row.dni,
  },
  {
    name:'Correo',
    selector: (row:any) => row.email,
  },
  {
    name:'Usuario',
    selector:(row:any)=><img src={row.user} className="w-[3rem] h-[3rem] rounded-[100%] block" />,
  },
  {
    name:'Nombre',
    selector: (row:any) => row.nombre,
  },
  {
    name:'Telefono',
    selector: (row:any) => row.telefono,
  },
  {
    name:'Categoria',
    selector: (row:any) => row.categoria,
  },
  {
    name:'Fecha',
    selector: (row:any) => row.fecha,
  },
  {
    name:'Opciones',
    cell:(row:any)=><MyOptions user={row}/>
  }
]

const data =
[
  {
    dni:'7777777',
    email:'fdfdfd',
    nombre:'leeel',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'777777547',
    email:'fdfdfd',
    nombre:'leeel',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'7777777',
    email:'si',
    nombre:'leeel',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'7777777',
    email:'fdfdfd',
    nombre:'juan',
    telefono:'555555555',
    categoria:'ALUM',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  },
  {
    dni:'7777777',
    email:'fdfdfd',
    nombre:'jose',
    telefono:'555555555',
    categoria:'PROF',
    fecha:'05/05/2050',
    user:'https://promart.vteximg.com.br/arquivos/ids/6394022-1000-1000/123233.jpg?v=637959389718430000'
  }
]

const Page=()=> 
{
  const[myFilter,setMyFilter]=useState({value:'',property:''})
  const{setShowPopup}=useContext(appContext)

  return (
    <MyBlock title="usuarios">
      <div className='flex flex-col'>
        <div className='flex gap-[1rem] mb-[1rem]'>
          <NewButton label='Registro Completo' onClick={()=>setShowPopup({show:true,popup:<NewUser/>})}  />
          <NewButton label='Registro Corto' onClick={()=>setShowPopup({show:true,popup:<NewUserLite/>})} />
        </div>
        <TheDataTable
          columns={columns}
          data={data}
          myFilter={myFilter}
          buttons={<MyFilters setMyFilter={setMyFilter} />}
        />
      </div>
    </MyBlock>
  );
}

export default Page




