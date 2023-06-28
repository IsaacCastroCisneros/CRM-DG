import { FormFileInput } from '@/components/FormFileInput/FormFileInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import file from '@/interfaces/file'
import React, { useState } from 'react'

interface values
{ 
  files: Array<file> 
  tipo:"demo"|"otros"|"personalizado"
  selectedFile:string
  link:string 
}

export const SessionArchivos = () => 
{
  const [values, setValues] = useState<values>({
    files: [],
    tipo:"demo",
    selectedFile:"",
    link: "",
  });
  
  return (
    <MyForm label="Guardar" submit={async () => null}>
      <FormFileInput state={setValues} files={values.files} multiple />
      <MyFlexContainer className='mt-[1rem]'>
        <MyFormInput
          name="seleccionaArchivos"
          options={["fd", "fd"]}
          onChange={(e) =>
            setValues({ ...values, selectedFile: e.target.value })
          }
        />
        <MyFormInput
          name="selecciona tipo"
          options={["demo", "otros", "personalizado"]}
          onChange={(e) => setValues({ ...values, tipo: e.target.value })}
        />
      </MyFlexContainer>
      <MyFormInput
        name="link opcional"
        onChange={(e) => setValues({ ...values, tipo: e.target.value })}
      />
    </MyForm>
  );
}
