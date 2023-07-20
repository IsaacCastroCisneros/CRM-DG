import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import TablePreguntasFrecuentes from './components/TablePreguntasFrecuentes/TablePreguntasFrecuentes'

export default function page() 
{
  return (
    <MyBlock title='preguntas frecuentes' >
      <TablePreguntasFrecuentes/>
    </MyBlock>
  )
}
