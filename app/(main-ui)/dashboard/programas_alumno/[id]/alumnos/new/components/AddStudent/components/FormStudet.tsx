import FormOption from '@/components/FormOption/FormOption'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import React from 'react'
import FormContainer from './FormContainer'

export default function FormStudet({errors}:any) 
{

  return (
    <FormContainer>
      <MyFlexContainer>
        <FormOption label="NOMBRES" onlyText/>
        <FormOption label="APELLIDOS" onlyText/>
        <FormOption label="CORREO" error={errors} type='email'/>
      </MyFlexContainer>
      <MyFlexContainer>
        <FormOption label="TELEFONO" type='number'/>
        <FormOption label="DNI" type='number'/>
        <FormOption label="ASESOR ENCARGADO" onlyText/>
        <FormOption label="MEDIO" onlyText/>
      </MyFlexContainer>
    </FormContainer>
  );
}
