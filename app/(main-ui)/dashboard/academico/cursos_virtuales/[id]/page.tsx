import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import CursoVirtualItems from './examenes/components/CursoVirtualItems/CursoVirtualItems'
import LocalContext from './context/LocalContext'

export default function page({params}:any) 
{
  const{id}=params

  return (
    <LocalContext program={{id,title:"ELABORACIÓN DE INSTRUMENTOS"}}>
      <MyBlock title="ELABORACIÓN DE INSTRUMENTOS" subtitle={`ID:${id}`}>
        <CursoVirtualItems program={{id,name:'ELABORACIÓN DE INSTRUMENTOS'}} />
      </MyBlock>
    </LocalContext>
  );
}
