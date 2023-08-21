import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useState } from 'react'
import { MyForm } from '@/components/MyForm/MyForm';
import validatingRequired from '@/helpers/validateRequired';

export default function CreateTitulo() 
{ 
  const[values,setValues]=useState<{title:string}>({title:""})

  const isValid=validatingRequired(values,['title'])

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
