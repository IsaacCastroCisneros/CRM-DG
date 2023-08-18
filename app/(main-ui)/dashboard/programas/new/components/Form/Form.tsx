"use client"

import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'
import StepSwitchButton  from '@/components/StepSwitchButton/StepSwitchButton'
import program from '../../interfaces/program'
import { Info } from './components/Info'
import { MyForm } from '@/components/MyForm/MyForm'
import { Options } from './components/Options'
import { Fecha } from './components/Fecha'
import { Media } from './components/Media'
import { Seo } from './components/Seo'
import { Respon } from './components/Respon'
import subject from '@/interfaces/subject'
import ContainerStepSwitchButton from '@/components/ContainerStepSwitchButton/ContainerStepSwitchButton'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'

const programDefault:program =
{
  step:1,
  type:"curso",
  nombreDelProgram:"",
  subtitulo:"",
  descripcionDelProgram:"",
  quienesDebenParticipar:"",
  queAprendere:"",
  marcarComoPrivado:false,
  modalidad:'',
  nivel:'',
  categorias:'',
  programEsGratuito:false,
  descuento:false,
  tipoDescuento:'',
  destacado:false,
  vistaPrevia:false,
  pagoRequerido:false,
  precioDeProgram:"",
  descuentoPrecio:"",
  categoriaDeProgram:[],
  fechaDeInicioDelProgram:"",
  fechaDeFinalizacionDelProgram:"",
  cierreDeinscripciones:[],
  instructoresDelProgram:[],
  activarVideoEnLandingPage:false,
  seleccionarVideoParaLanding:"",
  codigoDeVideoUrl:"",
  cardsPaginaPrincipal:"",
  fondoParaLandingPage:"",
  iconoDelProgram:"",
  bannerPromocional:"",
  responsablesMarketing:[],
  responsablesAsesoria:[],
  cursos:[],
  meta:[],
  metaDescripcion:"",
  metaImagen:"",
}

export const context= React.createContext<{program:program,updateProgram:Dispatch<SetStateAction<program>>}>({program:programDefault,updateProgram:()=>null})

export const Form = () => 
{
  const[values,setValues]=useState<program>(programDefault)
  const step = values.step
  const setValuesAsSubject = setValues as Dispatch<SetStateAction<subject>>
  const{type}=values

  const requirements =[
    "nombreDelProgram",
    "modalidad",
    "nivel",
    "categorias",
    "subtitulo",
    "descripcionDelProgram",
    "quienesDebenParticipar",
    "queAprendere",
  ]

  const isValid = validatingRequired(values,values.type==='curso'?requirements:[...requirements,{propertie:"cursos",value:[]}]);


  function validatingRequired(values:Record<any,any>,requirements:Array<{value:ReactNode,propertie:string}|string>):boolean
  {
     const isValid=requirements.every(requirement=>
      {
        const finalRequirement =
        typeof requirement === "string"
        ? { propertie: requirement, value: "" }
        : requirement;

        return `${values[finalRequirement.propertie]}`!==`${finalRequirement.value}`
      }) 

     return isValid
  }

  return (
    <>
      <p className="font-semibold block mb-[2rem]">
        Complete cada sección y haga clic en {'"Siguiente"'} para continuar. Los
        campos marcados con * son obligatorios
      </p>
      <MyFormInput
        className="inline-flex flex-[initial] max-w-[442px]"
        name="Tipo de Programa"
        options={["curso", "diploma", "diplomado"]}
        onChange={(e) => setValues({...values,type:e.target.value})}
      />
      <ContainerStepSwitchButton>
        <StepSwitchButton
          step={1}
          current={values.step}
          content={{ strong: "información", p: `Datos básicos del ${type}` }}
          setValues={setValuesAsSubject}
        />
        <StepSwitchButton
          step={2}
          current={values.step}
          content={{ strong: "opciones", p: `Opciones del ${type}` }}
          setValues={setValuesAsSubject}
        />
        <StepSwitchButton
          step={3}
          current={values.step}
          content={{ strong: "programacion", p: `Fechas de inicio y fin` }}
          setValues={setValuesAsSubject}
        />
        <StepSwitchButton
          step={4}
          current={values.step}
          content={{ strong: "media", p: `Fechas de inicio y fin` }}
          setValues={setValuesAsSubject}
        />
        <StepSwitchButton
          step={5}
          current={values.step}
          content={{ strong: "responsables", p: `Encargado de prospectos` }}
          setValues={setValuesAsSubject}
        />
        <StepSwitchButton
          step={6}
          current={values.step}
          content={{ strong: "seo", p: "Etiquetas y Metas" }}
          setValues={setValuesAsSubject}
        />
      </ContainerStepSwitchButton>
    <context.Provider value={{program:values,updateProgram:setValues} } >
      <MyForm
        submit={async () => null}
        values={values}
        setValues={setValues}
        stepsMax={6}
        oneMore={false}
        isValid={isValid}
        defaultValues={programDefault}
      >
        {step === 1 && <Info  />}
        {step === 2 && <Options  />}
        {step === 3 && <Fecha  />}
        {step === 4 && <Media  />}
        {step === 5 && <Respon  />}
        {step === 6 && <Seo  />}
      </MyForm>
    </context.Provider>
    </>
  );
}
