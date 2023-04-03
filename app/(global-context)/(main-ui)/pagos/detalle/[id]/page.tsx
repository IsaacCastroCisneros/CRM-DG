import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import ListaCuotas from './components/ListaCuotas/ListaCuotas'

export default function page() 
{
  return (
    <MyBlock title='Detalle de pagos'>
      <>
        <ListaCuotas/>
      </>
    </MyBlock>
  )
}
