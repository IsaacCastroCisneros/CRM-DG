import React from 'react'
import Form from '../../components/ClientContent/components/Form'
import MyBlock from '@/components/MyBlock/MyBlock'

export default function page({params}:any) 
{
  const{session}=params

  const data=
  {
    title: "titulo",
    content: "nada",
    date: "2023-05-10",
    horaInicio: "14:32",
    horaTermino: "15:32",
    tipoDeTransmision: "tipo",
  }

  return (
    <MyBlock title='Editar Sesion'>
      <Form  {...data} />
    </MyBlock>
  )
}
