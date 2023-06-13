import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import CursosVirtualesTable from './components/CursosVirtualesTable'

export default async function page() 
{
  return (
    <MyBlock title='Cursos Virtuales'>
      <CursosVirtualesTable/>
    </MyBlock>
  )
}
