'use client'

import FormOption from '@/components/FormOption/FormOption'
import NewButton from '@/components/NewButton/NewButton'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import { Formik,Form } from 'formik'
import React from 'react'
import registroEnvio from '../../../interface/registroEnvio'



export default function EditDataEnvio({user}:{user:any}) {
  return (
    <RegularPopup title={`Editar Registro de envio de ${user.nombre}`} content={<MyForm registroEnvio={user.registroEnvio[0]} />} />
  )
}

function MyForm({registroEnvio}:{registroEnvio:registroEnvio})
{
    return (
      <Formik
        initialValues={
          {
            direccion:registroEnvio?.direccion
          }
        }
        validate={(values) => {
          null;
        }}
        onSubmit={(values) => {
          null;
        }}
      >
        <Form className="flex flex-col gap-[.5rem]">
          <FormOption label="Direccion" />
          <FormOption label="Referencia" />
          <FormOption label="Distrito" />
          <FormOption label="Provincia" />
          <FormOption label="Departamento" />
          <NewButton label="Guardar" styles="mt-[2rem]" />
        </Form>
      </Formik>
    );
}