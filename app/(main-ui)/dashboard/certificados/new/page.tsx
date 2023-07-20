"use client"

import MyBlock from '@/components/MyBlock/MyBlock'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { useState } from 'react'

interface values
{
    codigo:string,
    registro:string,
    nombre:string,
    apellido:string,
    dni:string,
    categoria:"diploma"|"diplomado"|"curso"|"",
    programa:"SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA"|"DIPLOMAS"|"DIPLOMADOS"|"CURSOS"|"",
    estado:"Entregado"|"Aula Virtual"|"Olva"|"Pendiente"|"Oficina"|"",
    fecha:string
}

export default function Page() 
{
  const[values,setValues]=useState<values>(
    {
      codigo:"",
      registro:"",
      nombre:"",
      apellido:"",
      dni:"",
      categoria:"",
      programa:"",
      estado:"",
      fecha:""
    }
  )

  return (
    <MyBlock title="Nuevo Certificado">
      <MyForm submit={async () => null} setValues={setValues} values={values}>
        <MyFlexContainer>
          <MyFormInput
            name="codigo"
            type="number"
            value={values.codigo}
            onChange={(e) => setValues({ ...values, codigo: e.target.value })}
          />
          <MyFormInput
            name="dni"
            type="number"
            value={values.dni}
            onChange={(e) => setValues({ ...values, dni: e.target.value })}
          />
          <MyFormInput
            name="registro"
            type="number"
            value={values.registro}
            onChange={(e) => setValues({ ...values, registro: e.target.value })}
          />
        </MyFlexContainer>
        <MyFlexContainer>
          <MyFormInput
            name="nombre"
            onlyText
            value={values.nombre}
            onChange={(e) => setValues({ ...values, nombre: e.target.value })}
          />
          <MyFormInput
            name="apellido"
            onlyText
            value={values.apellido}
            onChange={(e) => setValues({ ...values, apellido: e.target.value })}
          />
        </MyFlexContainer>
        <MyFlexContainer>
          <MyFormInput
            name="categoria"
            options={["diploma", "diplomado", "curso"]}
            value={values.categoria}
            onChange={(e) => setValues({ ...values, categoria: e.target.value })}
          />
          <MyFormInput
            name="programa"
            options={[
              "SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA",
              "DIPLOMAS",
              "DIPLOMADOS",
              "CURSOS",
            ]}
            value={values.programa}
            onChange={(e) => setValues({ ...values, programa: e.target.value })}
          />
        </MyFlexContainer>
        <MyFlexContainer>
          <MyFormInput
            name="estado"
            options={[
              "Entregado",
              "Aula Virtual",
              "Olva",
              "Pendiente",
              "Oficina",
            ]}
            value={values.estado}
            onChange={(e) => setValues({ ...values, estado: e.target.value })}
          />
          <MyFormInput
            name="fecha"
            type="date"
            value={values.fecha}
            onChange={(e) => setValues({ ...values, fecha: e.target.value })}
          />
        </MyFlexContainer>
      </MyForm>
    </MyBlock>
  );
}
