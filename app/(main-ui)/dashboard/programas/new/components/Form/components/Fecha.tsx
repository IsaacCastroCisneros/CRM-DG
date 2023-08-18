"use client"

import React, { useContext } from 'react'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import { CustomSelector } from '@/components/CustomSelector/CustomSelector';
import { context } from '../Form';

export const Fecha = () => 
{
  const{program,updateProgram}= useContext(context)
  const{type}=program

  return (
    <>
      <MyFlexContainer>
        <MyFormInput
          type="date"
          name={`fecha de inicio del ${program}`} 
          value={program.fechaDeInicioDelProgram}
          onChange={(e) =>
            updateProgram({ ...program, fechaDeInicioDelProgram: e.target.value })
          }
        />
        <MyFormInput
          type="date"
          name={`fecha de finalizacion del ${type}`}
          value={program.fechaDeFinalizacionDelProgram}
          onChange={(e) =>
            updateProgram({
              ...program,
              fechaDeFinalizacionDelProgram: e.target.value,
            })
          }
        />
        <MyFormInput
          type="date"
          name="cierreDeinscripciones"
          value={program.cierreDeinscripciones}
          onChange={(e) =>
            updateProgram({ ...program, cierreDeinscripciones: e.target.value })
          }
        />
      </MyFlexContainer>
      <CustomSelector items={program.instructoresDelProgram} name="instructoresDelCurso" updateProgram={(items)=>updateProgram({...program,instructoresDelProgram:items})} />
    </>
  );
}
