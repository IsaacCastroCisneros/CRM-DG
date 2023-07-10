"use client"

import { MyButton } from '@/components/MyButton/MyButton'
import { MyLink } from '@/components/MyLink/MyLink'
import React, { useState } from 'react'
import { SwitchButton } from './components/SwitchButton'
import curso from '../../interfaces/curso'
import { Info } from './components/Info'
import { MyForm } from '@/components/MyForm/MyForm'
import { Options } from './components/Options'
import { Fecha } from './components/Fecha'
import { Media } from './components/Media'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { Seo } from './components/Seo'
import { Respon } from './components/Respon'

export const Form = () => 
{
  const[values,setValues]=useState<curso>(
    {
      step:1,
      nombreDelCurso:"",
      subtitulo:"",
      descripcionDelCurso:"",
      quienesDebenParticipar:"",
      queAprendere:"",
      marcarComoPrivado:false,
      modalidad:'',
      nivel:'',
      categorias:'',
      cursoEsGratuito:false,
      descuento:false,
      tipoDescuento:'',
      destacado:false,
      vistaPrevia:false,
      pagoRequerido:false,
      precioDeCurso:"",
      descuentoPrecio:"",
      categoriaDeCurso:[''],
      fechaDeInicioDelCurso:"",
      fechaDeFinalizacionDelCurso:"",
      cierreDeinscripciones:[''],
      instructoresDelCurso:[''],
      activarVideoEnLandingPage:false,
      seleccionarVideoParaLanding:"",
      codigoDeVideoUrl:"",
      cardsPaginaPrincipal:"",
      fondoParaLandingPage:"",
      iconoDelCurso:"",
      bannerPromocional:"",
      responsablesMarketing:[""],
      responsablesAsesoria:[""],
      meta:[""],
      metaDescripcion:"",
      metaImagen:""
    })
  
  const step = values.step

  function switching(prev:any,maxmin:number,operation:'minus'|'addition')
  {

    function operatting()
    {
      if(operation==='minus')return prevStep-1
      if(operation==='addition')return prevStep+1
    }

    const prevStep = prev.step

    const step = prevStep===maxmin ? maxmin: operatting()

    return {...prev,step}
  }

  const min =1;
  const max=6

  return (
    <>
      <p className="font-semibold block mb-[2rem]">
        Complete cada sección y haga clic en {'"Siguiente"'} para continuar. Los
        campos marcados con * son obligatorios
      </p>
      <div className="flex bg-[#fff] my-shadow mb-[4rem]">
        <SwitchButton
          step={1}
          current={values.step}
          content={{ strong: "información", p: "Datos básicos del curso" }}
          setValues={setValues}
        />
        <SwitchButton
          step={2}
          current={values.step}
          content={{ strong: "opciones", p: "Opciones del curso" }}
          setValues={setValues}
        />
        <SwitchButton
          step={3}
          current={values.step}
          content={{ strong: "programacion", p: "Fechas de inicio y fin" }}
          setValues={setValues}
        />
        <SwitchButton
          step={4}
          current={values.step}
          content={{ strong: "media", p: "Fechas de inicio y fin" }}
          setValues={setValues}
        />
        <SwitchButton
          step={5}
          current={values.step}
          content={{ strong: "responsables", p: "Encargado de prospectos" }}
          setValues={setValues}
        />
        <SwitchButton
          step={6}
          current={values.step}
          content={{ strong: "seo", p: "Etiquetas y Metas" }}
          setValues={setValues}
        />
      </div>
      <MyForm submit={async () => null}>
        {step === 1 && <Info values={values} setValues={setValues} />}
        {step === 2 && <Options values={values} setValues={setValues} />}
        {step === 3 && <Fecha values={values} setValues={setValues} />}
        {step === 4 && <Media values={values} setValues={setValues} />}
        {step === 5 && <Respon values={values} setValues={setValues} />}
        {step === 6 && <Seo values={values} setValues={setValues} />}
      </MyForm>
      <div className="flex gap-[2rem]">
        <div className='flex gap-[.5rem]'>
          <button
            disabled={values.step===min}
            className={`${values.step===min? 'brightness-[70%]':''} bg-myGray text-[#fff] rounded-[.5rem] px-[.5rem]`}
            onClick={() => setValues((prev) => switching(prev, min, "minus"))}
          >
            <FontAwesomeIcon size='xl' icon={faAnglesLeft} />
          </button>
          <MyButton
            className={`${values.step===max ? 'brightness-[70%]':''}`}
            disabled={values.step===max}
            onClick={() => setValues((prev) => switching(prev, max, "addition"))}
          >
            siguiente
          </MyButton>
        </div>
        <MyLink href={"/dashboard/academico/cursos_virtuales/"} cancel>
          cancel
        </MyLink>
      </div>
    </>
  );
}
