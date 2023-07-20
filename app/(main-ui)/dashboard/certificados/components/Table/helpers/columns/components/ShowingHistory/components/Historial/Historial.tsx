import { MyButton } from '@/components/MyButton/MyButton'
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import HistorialItem from './components/HistorialItem'


export default function Historial() 
{
  return (
    <div>
       <section className='flex items-center justify-between pb-[1rem] border-b-[1px] border-myBorder'>
          <strong className='text-primary text-xl'>
          Historial de Certificado
          </strong>
          <MyButton icon={faFileCirclePlus} className='text-[1rem]'  noWidth>Agregar Nota</MyButton>
       </section>
       <section className='py-[2rem]'>
          <HistorialItem/>
       </section>
    </div>
  )
}


