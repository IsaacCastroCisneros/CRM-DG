import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useState } from 'react'
import { CreatingQuestions } from './components/CreatingQuestions/CreatingQuestions'

interface examen
{
  nombre:string
  tipo:'caso practico'|'evaluacion'
  intentos:1|2|3|4|5
  fechaInicio:string
  hora:string
  orden:'no'|'si'
}

export const EditForm = () => 
{
  const[values,setValues]=useState<examen>(
    {
      nombre:'',
      tipo:'caso practico',
      intentos:1,
      fechaInicio:'',
      hora:'',
      orden:'no'
    })

  return (
    <MyForm label="Guardar Cambios" submit={async () => null} fragment={<CreatingQuestions/>} >
      <MyFlexContainer>
        <MyFormInput
          name="nombre"
          value={values.nombre}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, nombre: e.target.value };
            })
          }
        />
        <MyFormInput
          name="tipo"
          options={["caso practico", "evaluacion"]}
          value={values.tipo}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, tipo: e.target.value };
            })
          }
        />
        <MyFormInput
          name="intentos"
          value={values.intentos}
          options={["1", "2", "3", "4", "5"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, intentos: e.target.value };
            })
          }
        />
      </MyFlexContainer>
      <MyFlexContainer>
        <MyFormInput
          name="fechaInicio"
          value={values.fechaInicio}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, fechaInicio: e.target.value };
            })
          }
        />
        <MyFormInput
          name="hora"
          value={values.hora}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, hora: e.target.value };
            })
          }
        />
        <MyFormInput
          name="orden"
          options={['si','no']}
          value={values.orden}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, orden: e.target.value };
            })
          }
        />
      </MyFlexContainer>
    </MyForm>
  );
}
