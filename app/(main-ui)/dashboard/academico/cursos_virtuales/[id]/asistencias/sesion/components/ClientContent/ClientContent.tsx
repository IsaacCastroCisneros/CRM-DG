"use client"

import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React, { useContext, useState } from 'react'
import columns from '../../helpers/columns'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { FormFileInput } from '@/components/FormFileInput/FormFileInput'
import file from '@/interfaces/file'
import Papa from 'papaparse';
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import appContext from '@/context/appContext'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
 
const data=
[
  {
    dni:'4454',
    correo:'fdsfs@fd.com',
    nombre:'carlos',
    sesion:'99',
    asistencia:false,
  },
  {
    dni:'656',
    correo:'lelos@fd.com',
    nombre:'fabian',
    sesion:'99',
    asistencia:true,
  },
]

export const ClientContent = () => 
{
  const[file,setFile]=useState<{files:Array<file>}>({files:[]})
  const{setShowPopup}=useContext(appContext)

  function parsingData()
  {
    const files:any = file.files[0].file

    Papa.parse(files, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        console.log(results.data);
      },
    });
  }
  
  return (
    <>
      <MyButtonLink
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup
                content={<></>}
                title="Subir Asistencia Por Archivo CSV"
              />
            ),
          })
        }
        label="Subir archivo CSV"
      />
      <FormFileInput state={setFile} files={file.files} />
      <MyFormInput
        options={["sesion 1", "sesion 2", "sesion 3"]}
        onChange={() => null}
        className="mb-[2rem]"
      />
      <TheDataTable data={data} columns={columns} />
    </>
  );
}
