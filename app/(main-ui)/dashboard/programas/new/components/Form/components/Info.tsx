"use client"

import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useContext } from 'react'
import { SwitchInput } from '@/components/SwitchInput/SwitchInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { context } from '../Form'
import { CustomSelector } from '@/components/CustomSelector/CustomSelector'

export const Info = () => 
{
  const{program,updateProgram}=useContext(context)
  const{type}=program

  return (
    <>
      <MyFlexContainer>
        <SwitchInput
          name="Marcar como privado (Aplica para IN HOUSE)"
          checked={program.marcarComoPrivado}
          onChange={(e) =>
            updateProgram({ ...program, marcarComoPrivado: e.target.checked })
          }
        />
        <SwitchInput
          name="Destacado"
          checked={program.destacado}
          onChange={(e) =>
            updateProgram({ ...program, destacado: e.target.checked })
          }
        />
        <SwitchInput
          name="Destacado"
          checked={program.vistaPrevia}
          onChange={(e) =>
            updateProgram({ ...program, vistaPrevia: e.target.checked })
          }
        />
      </MyFlexContainer>
      <MyFormInput
        name={`*nombre del ${type}`} 
        value={program.nombreDelProgram}
        onlyText
        onChange={(e) =>
          updateProgram({ ...program, nombreDelProgram: e.target.value })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          name="*modalidad"
          value={program.modalidad}
          options={["envivo", "grabado", "texto"]}
          onChange={(e) => updateProgram({ ...program, modalidad: e.target.value })}
        />
        <MyFormInput
          name="*nivel"
          value={program.nivel}
          options={["basico", "intermedio", "avanzado"]}
          onChange={(e) => updateProgram({ ...program, nivel: e.target.value })}
        />
        <MyFormInput
          name="*categorias"
          value={program.categorias}
          options={[
            { label: "gestion publica", disabled: true },
            "SIAF",
            "SEACE",
            { label: "habilidades blandas", disabled: true },
            "Manejo de estres",
            { label: "Marketing", disabled: true },
            "Marketing en tik tok",
            "Marketing en youtube",
            { label: "Finanzas", disabled: true },
            "Finanazas para mypes",
            { label: "Informatica", disabled: true },
            "Ofimatica",
            "IA",
          ]}
          onChange={(e) => updateProgram({ ...program, categorias: e.target.value })}
        />
      </MyFlexContainer>
      <MyFormInput
        name="*subtitulo (PRE CABECERA)"
        onlyText
        value={program.subtitulo}
        onChange={(e) => updateProgram({ ...program, subtitulo: e.target.value })}
      />
      <MyFormInput
        name={`*descripcion del ${type}`}
        value={program.descripcionDelProgram}
        onChange={(e) =>
          updateProgram({ ...program, descripcionDelProgram: e.target.value })
        }
      />
      <MyFormInput
        name="*quienesDebenParticipar"
        value={program.quienesDebenParticipar}
        onChange={(e) =>
          updateProgram({ ...program, quienesDebenParticipar: e.target.value })
        }
      />
      <MyFormInput
        name="*queAprendere"
        value={program.queAprendere}
        onChange={(e) => updateProgram({ ...program, queAprendere: e.target.value })}
      />
      {
        type!=='curso'&&<CustomSelector name='*cursos incluidos en el diploma' items={program.cursos}  updateProgram={(items)=>updateProgram({...program,cursos:items})} />
      }
    </>
  );
}
