import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React from 'react'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import stepFragment from '../interfaces/stepFragment';


export default function Informacion({setValues,values}:stepFragment) 
{
  return (
    <>
      <MyFlexContainer>
        <MyFormInput
          name="nombres"
          value={values.nombres}
          onChange={(e) => setValues({ ...values, nombres: e.target.value })}
          onlyText
        />
        <MyFormInput
          name="apellidos"
          value={values.apellidos}
          onChange={(e) => setValues({ ...values, apellidos: e.target.value })}
          onlyText
        />
        <MyFormInput
          name="telefono"
          value={values.telefono}
          onChange={(e) => setValues({ ...values, telefono: e.target.value })}
          type="number"
        />
        <MyFormInput
          name="dni"
          value={values.dni}
          onChange={(e) => setValues({ ...values, dni: e.target.value })}
          type="number"
          max={8}
        />
      </MyFlexContainer>
      <MyFlexContainer>
        <MyFormInput
          name="correo"
          value={values.correo}
          onChange={(e) => setValues({ ...values, correo: e.target.value })}
          type="email"
        />
        
        <MyFormInput
          name="medio"
          value={values.medio}
          onChange={(e) => setValues({ ...values, medio: e.target.value })}
        />
        <MyFormInput
          name="asesorEncargado"
          value={values.asesorEncargado}
          onChange={(e) =>
            setValues({ ...values, asesorEncargado: e.target.value })
          }
          options={["jose", "luis", "felipe"]}
        />
      </MyFlexContainer>
    </>
  );
}
