import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import PagosNewForm from './components/PagosNewForm/PagosNewForm'

export default function page() 
{
  return (
    <MyBlock title={"Nuevo pago"}>
       <PagosNewForm/>        
    </MyBlock>
  )
}

