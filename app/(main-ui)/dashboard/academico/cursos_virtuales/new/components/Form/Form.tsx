"use client"

import React, { useState } from 'react'
import { SwitchButton } from './components/SwitchButton'
import curso from '../../interfaces/curso'
import { Info } from './components/Info'
import { MyForm } from '@/components/MyForm/MyForm'
import { Options } from './components/Options'
import { Fecha } from './components/Fecha'
import { Media } from './components/Media'
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
      <MyForm submit={async () => null} values={values} setValues={setValues} stepsMax={6} >
        {step === 1 && <Info values={values} setValues={setValues} />}
        {step === 2 && <Options values={values} setValues={setValues} />}
        {step === 3 && <Fecha values={values} setValues={setValues} />}
        {step === 4 && <Media values={values} setValues={setValues} />}
        {step === 5 && <Respon values={values} setValues={setValues} />}
        {step === 6 && <Seo values={values} setValues={setValues} />}
      </MyForm>
    </>
  );
}
