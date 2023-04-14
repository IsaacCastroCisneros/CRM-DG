import React from 'react'
import PagosCertificadosItem from './components/PagosCertificadosItem';

export default function PagosCertificados() 
{
  const list=
  [
    {
      certificado:'diploma',
      quantity:3,
      hours:20
    },
    {
      certificado:'diploma',
      quantity:5,
      hours:55
    },
    {
      certificado:'certificado SIAF',
      quantity:4,
      hours:234
    }
  ] 

  return (
    <div className='text-myBlack mb-[25.6px]'>
        <span className='block capitalize px-[1.5rem] mb-[.8rem]'>
           certificados incluidos
        </span>
        <ul className='bg-[#FFFFE1] px-[2.5rem] py-[1.5rem] border-[1px] rounded-[.6rem] border-[#F3F3E0]'>
            {
                list.map((item,pos)=>
                    {
                      return <PagosCertificadosItem key={pos} {...item} />;  
                    }) 
            }
        </ul>
    </div>
  )
}




