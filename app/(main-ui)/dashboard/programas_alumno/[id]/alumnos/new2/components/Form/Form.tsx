"use client"

import ContainerStepSwitchButton from '@/components/ContainerStepSwitchButton/ContainerStepSwitchButton'
import { MyForm } from '@/components/MyForm/MyForm'
import StepSwitchButton from '@/components/StepSwitchButton/StepSwitchButton'
import subject from '@/interfaces/subject'
import React, { Dispatch, SetStateAction, useState } from 'react'
import Informacion from './components/Informacion'
import alumno from './interfaces/alumno'
import Envio from './components/Envio'
import Facturacion from './components/Facturacion'

export default function Form() 
{
  const[values,setValues]=useState<alumno>(
    {
      step:1,
      nombres:'',
      apellidos:'',
      correo:'',
      telefono:'',
      dni:'',
      asesorEncargado:'',
      medio:'',
      direccion:'',
      distrito:'',
      provincia:'',
      departamento:'',
      referencia:'',
      tenor:'',
      certificacion:'',
      tipoDeComprobante:'',
      fechaDeInicion:'',
      fechaFin:'',
      horasCertificadas:'',
      nComprobante:'',
      inversion:'',
      cuotas:'',
      descuento:'',
      asesorAsignado:'',
      ruc:'',
      razonSocial:''
    })
    
  const setValuesAsSubject = setValues as Dispatch<SetStateAction<subject>>

  const step = values.step

  return (
    <>
      <ContainerStepSwitchButton>
        <StepSwitchButton
          setValues={setValuesAsSubject}
          step={1}
          content={{ strong: "informacion", p: "datos basicos del alumno" }}
          current={step}
        />
        <StepSwitchButton
          setValues={setValuesAsSubject}
          step={2}
          content={{ strong: "envio", p: "datos de envio de certificado" }}
          current={step}
        />
        <StepSwitchButton
          setValues={setValuesAsSubject}
          step={3}
          content={{ strong: "Facturacion", p: "Boleta o Factura" }}
          current={step}
        />
      </ContainerStepSwitchButton>
      <MyForm values={values} setValues={setValues} submit={async () => null} stepsMax={3} >
        {
          step===1&&<Informacion values={values} setValues={setValues} />
        }
        {
          step===2&&<Envio values={values} setValues={setValues} />
        }
        {
          step===3&&<Facturacion values={values} setValues={setValues} />
        }
      </MyForm>
    </>
  );
}
