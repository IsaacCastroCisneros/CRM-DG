import { faDownload, faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Reportes = () => 
{
  return (
    <ul className='text-[#fff] gap-[.5rem] flex flex-col'>
       <Item title='Todos los inscritos' subtitle='Estén al día de pago o no' />
       <Item title='Examinados' subtitle='Los que han realizado por lo menos un examen' />
       <Item title='No Examinados' subtitle='Los que NO han realizado ningún examen' />
    </ul>
  )
}

function Item({title,subtitle}:{title:string,subtitle:string})
{
  return(
    <li className='bg-slate-700 flex px-[1rem] py-[.7rem] justify-between rounded-[.5rem]'>
        <div className='flex flex-col w-[25rem]'>
            <strong className='text-[.8rem]'>
              {
                title
              }
            </strong>
            <p>
              {
                subtitle
              }
            </p>
        </div>
       <button className='bg-green-400 px-[.8rem] py-[.6rem] flex gap-[.5rem] items-center'>
         <FontAwesomeIcon icon={faDownload} />
         Descargar
       </button>
    </li>
  )
}
