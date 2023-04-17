import MyBlock from '@/components/MyBlock/MyBlock'
import ListaCuotas from './components/ListaCuotas/ListaCuotas'
import React from 'react'

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
