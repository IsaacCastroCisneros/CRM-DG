import Option from '@/components/Option/Option';
import Options from '@/components/Options/Options';
import React, { Dispatch } from 'react'

export default function CuotasOptions() 
{
  return (
      <Options>
        <Option label='Guardar' type='save' onClick={()=>null} typeButton='button' />
      </Options>
  )
}