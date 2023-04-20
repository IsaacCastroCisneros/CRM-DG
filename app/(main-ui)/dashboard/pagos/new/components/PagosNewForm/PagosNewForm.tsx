'use client'

import React, { useState } from 'react'
import { Field, Formik,Form } from 'formik';
import UpperForm from './components/UpperForm/UpperForm';
import PagosCertificados from './components/PagosCertificados/PagosCertificados';
import Cuotas from './components/Cuotas/Cuotas';
import BottomForm from './components/BottomForm/BottomForm';
import values from './intefaces/values';
import pagosNewFormContext from './context/pagosNewFormContext';



const PagosNewForm=()=> 
{
  const[isOk,setIsOk]=useState<boolean>(false)

  const values:values=
  {
    isOk,
    setIsOk
  }

  return (
    <pagosNewFormContext.Provider
     value={values}
     >
      <Formik
        initialValues={{
          nDeOperacion: "",
          codigo: "",
          alumno: "",
        }}
        validate={(values) => {
          null
        }}
        onSubmit={(values) => {
          null
        }}
      >
        <Form>
          <UpperForm />
          <PagosCertificados />
          <Cuotas />
          <BottomForm />
        </Form>
      </Formik>
    </pagosNewFormContext.Provider>
  );
}


export default PagosNewForm

