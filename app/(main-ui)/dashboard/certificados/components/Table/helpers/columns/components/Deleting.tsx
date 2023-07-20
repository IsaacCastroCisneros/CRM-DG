"use client"

import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import Option from '@/components/Option/Option'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import appContext from '@/context/appContext'
import React, { useContext } from 'react'

export default function Deleting({row}:{row:any} ) 
{
  const{setShowPopup}=useContext(appContext)

  const subject = `el certificado de ${row.program} para ${row.name}`

  return (
    <Option
      type="delete"
      label="Eliminar"
      onClick={() =>
        setShowPopup({
          show: true,
          popup: (
            <RegularPopup
              title="Eliminar Certificado"
              content={<DeleteAlert subject={subject} />}
            />
          ),
        })
      }
    />
  );
}
