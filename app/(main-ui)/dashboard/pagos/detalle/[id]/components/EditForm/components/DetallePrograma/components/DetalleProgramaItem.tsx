import React from 'react'

interface props
{
  programa:string;
  horas:string;
  fechaIni:string;
  fechaFin:string;
}

export default function DetalleProgramaItem(props:props)
{
  const
  {
    programa,
    horas,
    fechaIni,
    fechaFin
  }=props

  return (
    <ul className="flex border-b-[1px] border-[#DDDDDD] py-[.3rem]">
      <li className="flex-1">{programa}</li>
      <li className="flex-1">{horas} hrs</li>
      <li className="flex-1">{fechaIni}</li>
      <li className="flex-1">{fechaFin}</li>
    </ul>
  );
}
