import React from 'react'
import step from '../../../interfaces/step'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import { CustomSelector } from '@/components/CustomSelector/CustomSelector';

export const Fecha = ({values,setValues}:step) => 
{
  return (
    <>
    <MyFlexContainer>
      <MyFormInput
        type="date"
        name="fechaDeInicioDelCurso"
        value={values.fechaDeInicioDelCurso}
        onChange={(e) =>
          setValues({ ...values, fechaDeInicioDelCurso: e.target.value })
        }
      />
      <MyFormInput
        type="date"
        name="fechaDeFinalizacionDelCurso"
        value={values.fechaDeFinalizacionDelCurso}
        onChange={(e) =>
          setValues({ ...values, fechaDeFinalizacionDelCurso: e.target.value })
        }
      />
      <MyFormInput
        type="date"
        name="cierreDeinscripciones"
        value={values.cierreDeinscripciones}
        onChange={(e) =>
          setValues({ ...values, cierreDeinscripciones: e.target.value })
        }
      />
    </MyFlexContainer>
    <CustomSelector name="instructoresDelCurso" />
    </>
  );
}
