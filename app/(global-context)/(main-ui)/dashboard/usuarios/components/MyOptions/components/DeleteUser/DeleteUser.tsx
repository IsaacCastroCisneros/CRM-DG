'use client'

import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import NewButton from '@/components/NewButton/NewButton'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import { appContext } from '@/context/AppContenxt'
import React, { useContext } from 'react'

export default function DeleteUser({nombre}:{nombre:string}) 
{
  return (
    <RegularPopup title={`Eliminar a ${nombre}`} content={<DeleteAlert subject={`al usuario ${nombre}`} />} />
  )
}


