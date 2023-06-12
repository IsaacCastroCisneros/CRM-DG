import Option from '@/components/Option/Option'
import Options from '@/components/Options/Options'
import React from 'react'

export default function MyAlumnosOptions({row}:any) 
{
  const{id}=row

  return (
    <Options>
      <Option type='ver' label='ver' href={`/dashboard/programas_alumno/${id}`}/>
      <Option type='add' label='Agregar Alumno' href={`/dashboard/programas_alumno/${id}/alumnos/new`}/>
    </Options>
  )
}

