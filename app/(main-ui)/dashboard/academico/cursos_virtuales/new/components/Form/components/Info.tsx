import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React from 'react'
import step from '../../../interfaces/step'
import { SwitchInput } from '@/components/SwitchInput/SwitchInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'

export const Info = ({values,setValues}:step) => 
{
  return (
    <>
      <MyFlexContainer>
        <SwitchInput
          name="Marcar como privado (Aplica para IN HOUSE)"
          checked={values.marcarComoPrivado}
          onChange={(e) =>
            setValues({ ...values, marcarComoPrivado: e.target.checked })
          }
        />
        <SwitchInput
          name="Destacado"
          checked={values.destacado}
          onChange={(e) =>
            setValues({ ...values, destacado: e.target.checked })
          }
        />
        <SwitchInput
          name="Destacado"
          checked={values.vistaPrevia}
          onChange={(e) =>
            setValues({ ...values, vistaPrevia: e.target.checked })
          }
        />
      </MyFlexContainer>
      <MyFormInput
        name="*nombreDelCurso"
        value={values.nombreDelCurso}
        onChange={(e) =>
          setValues({ ...values, nombreDelCurso: e.target.value })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          name="modalidad"
          value={values.modalidad}
          options={["envivo", "grabado", "texto"]}
          onChange={(e) => setValues({ ...values, modalidad: e.target.value })}
        />
        <MyFormInput
          name="nivel"
          value={values.nivel}
          options={["basico", "intermedio", "avanzado"]}
          onChange={(e) => setValues({ ...values, nivel: e.target.value })}
        />
        <MyFormInput
          name="categorias"
          value={values.categorias}
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
          onChange={(e) => setValues({ ...values, categorias: e.target.value })}
        />
      </MyFlexContainer>
      <MyFormInput
        name="*subtitulo (PRE CABECERA)"
        value={values.subtitulo}
        onChange={(e) => setValues({ ...values, subtitulo: e.target.value })}
      />
      <MyFormInput
        name="*descripcionDelCurso"
        value={values.descripcionDelCurso}
        onChange={(e) =>
          setValues({ ...values, descripcionDelCurso: e.target.value })
        }
      />
      <MyFormInput
        name="*quienesDebenParticipar"
        value={values.quienesDebenParticipar}
        onChange={(e) =>
          setValues({ ...values, quienesDebenParticipar: e.target.value })
        }
      />
      <MyFormInput
        name="*queAprendere"
        value={values.queAprendere}
        onChange={(e) => setValues({ ...values, queAprendere: e.target.value })}
      />
    </>
  );
}
