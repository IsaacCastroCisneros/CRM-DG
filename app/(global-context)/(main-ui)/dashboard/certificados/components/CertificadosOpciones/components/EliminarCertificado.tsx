import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import React from 'react'

export default function EliminarCertificado({name}:{name:string}) {
  return (
    <RegularPopup title={`Eliminar certificado de ${name}`} content={<DeleteAlert subject={`el certificado de ${name}`} />}/>
  )
}

