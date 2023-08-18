"use client"

import MyBlock from '@/components/MyBlock/MyBlock'
import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useState } from 'react'

export default function Page() 
{
  const[values,setValues]=useState(
    {
      gracias:""
    })

  return (
    <MyBlock title="pagina gracias">
      <MyForm
        values={values}
        setValues={setValues}
        submit={async () => null}
        oneMore={false}
      >
        <MyFormInput
          textEditor
          name="gracias"
          value={values.gracias}
          onChange={(e) => setValues({ gracias: e.target.getContent() })}
        />
      </MyForm>
    </MyBlock>
  );
}
