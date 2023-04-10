import React from 'react'

interface props
{
    certificado:string;
    quantity:number;
    hours:number
}

export default function PagosCertificadosItem({certificado,quantity,hours}:props)
{
  return (
    <li className="flex py-[.5rem] justify-between border-b-[1px] border-b-[#F3F3E0]">
      <span className='flex'>
        {quantity}&nbsp;
        <span className='capitalize'>
        {certificado}
        </span>
      </span>
      <span>{hours}&nbsp;horas</span>
    </li>
  );
}
