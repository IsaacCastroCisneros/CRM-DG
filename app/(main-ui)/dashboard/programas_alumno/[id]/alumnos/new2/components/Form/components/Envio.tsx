import React from 'react'
import stepFragment from '../interfaces/stepFragment'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';


export default function Envio({values,setValues}:stepFragment) 
{
  return (
    <>
      <MyFlexContainer>
        <MyFormInput
          name="direccion"
          value={values.direccion}
          onChange={(e) => setValues({ ...values, direccion: e.target.value })}
        />
        <MyFormInput
          name="distrito"
          options={["independencia", "independencia"]}
          value={values.distrito}
          onChange={(e) => setValues({ ...values, distrito: e.target.value })}
        />
        <MyFormInput
          name="provincia"
          options={["lima", "lima"]}
          value={values.provincia}
          onChange={(e) => setValues({ ...values, provincia: e.target.value })}
        />
      </MyFlexContainer>
      <MyFlexContainer>
        <MyFormInput
          name="departamento"
          options={["lima", "lima"]}
          value={values.departamento}
          onChange={(e) =>
            setValues({ ...values, departamento: e.target.value })
          }
        />
        <MyFormInput
          name="referencia"
          value={values.referencia}
          onChange={(e) => setValues({ ...values, referencia: e.target.value })}
        />
      </MyFlexContainer>
    </>
  );
}
