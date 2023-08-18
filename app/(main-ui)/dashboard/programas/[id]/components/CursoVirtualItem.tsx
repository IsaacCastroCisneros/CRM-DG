import React from 'react'
import cursoVirtualItem from '../../interfaces/cursoVirtualItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const CursoVirtualItem = (props:cursoVirtualItem) => 
{
  const
  {
    title,
    description,
    buttons,
    icon
  }=props

  return (
    <section>
      <div className='flex gap-[.5rem] items-center mb-[.5rem]'>
       <FontAwesomeIcon icon={icon} size='2xl' />
       <strong className='text-[1.5rem] block'>{title}</strong>
      </div>
       <p className='mb-[.5rem]'>
         {description}
       </p>
       {
        buttons
       }
    </section>
  )
}
