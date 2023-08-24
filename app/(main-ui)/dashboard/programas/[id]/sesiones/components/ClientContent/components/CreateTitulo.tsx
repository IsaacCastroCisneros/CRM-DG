"use client"

import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useEffect, useState } from 'react'
import { MyForm } from '@/components/MyForm/MyForm';
import validatingRequired from '@/helpers/validateRequired';

export default function CreateTitulo({title=""}:{title?:string}) 
{ 
  const[values,setValues]=useState<{title:string}>({title:""})

  const isValid=validatingRequired(values,['title'])
  
  useEffect(()=>
  {
    setValues({title})
  },[])

  return (
    <>
      <MyForm
        isPopup={true}
        isValid={isValid}
        oneMore={false}
        label="Crear"
        values={values}
        setValues={setValues}
        submit={async () =>null}
      >
        <MyFormInput
          name="Titulo"
          value={values.title}
          onChange={(e) => setValues(prev=>{return{...prev,title:e.target.value}} )}
        />
      </MyForm>
    </>
  );
}
