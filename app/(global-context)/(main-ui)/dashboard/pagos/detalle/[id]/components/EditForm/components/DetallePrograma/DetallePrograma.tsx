import React from 'react'
import DetalleProgramaItem from './components/DetalleProgramaItem'

export default function DetallePrograma()
{
  const list=
  [
    {
      programa:'siga',
      horas:'32',
      fechaIni:'01/02/2023',
      fechaFin:'01/02/2024'
    },
    {
      programa:'siga',
      horas:'34',
      fechaIni:'01/02/2023',
      fechaFin:'01/02/2024'
    },
    {
      programa:'siga',
      horas:'12',
      fechaIni:'01/02/2023',
      fechaFin:'01/02/2024'
    }
  ]

  return(
     <div className='flex flex-col max-h-[25rem] overflow-y-auto'>
        <h1 className='text-[1.1rem] font-medium mb-[1rem] block'>
          Lista de Programas Incluidos
        </h1>
        <ul className='flex mb-[.3rem]'>
          <li className='flex-1' >
            Programa
          </li>
          <li className='flex-1' >
            Horas
          </li>
          <li className='flex-1' >
            Fecha de Inicio
          </li>
          <li className='flex-1' >
            Fecha de Fin
          </li>
        </ul>
        {
          list.map((entry,pos)=>
            {
              return <DetalleProgramaItem key={pos} {...entry}/>
            })
        }
     </div>
  )
}
