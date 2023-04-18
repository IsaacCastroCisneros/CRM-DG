'use client'

import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import React from 'react'

const DeleteUser=({nombre}:{nombre:string})=> 
{
  return (
    <RegularPopup title={`Eliminar a ${nombre}`} content={<DeleteAlert subject={`al usuario ${nombre}`} />} />
  )
}

export default DeleteUser

