import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import dynamic from 'next/dynamic'

const ListaCuotas = dynamic(() => import("./components/ListaCuotas/ListaCuotas"), { ssr: false })

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
