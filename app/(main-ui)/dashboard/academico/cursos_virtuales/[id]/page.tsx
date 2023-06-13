import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import cursoVirtualItems from './helpers/cursoVirtualItems'
import { CursoVirtualItem } from './components/CursoVirtualItem'

export default function page({params}:any) 
{
  const{id} =params

  return (
    <MyBlock title='CURSO VIRTUAL' subtitle={`ID:${id}`} >
      <div className='grid-cols-[repeat(3,1fr)] gap-[3rem] grid'>
       {
         cursoVirtualItems(id).map((c,pos)=>
         (
            <CursoVirtualItem key={pos} {...c} />
         ))
       }
      </div>
    </MyBlock>
  )
}
