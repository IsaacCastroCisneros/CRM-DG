import FormOption from '@/components/FormOption/FormOption'
import NewButton from '@/components/NewButton/NewButton';
import { Form, Formik } from 'formik'
import React from 'react'

export default function ChangePassord() {
  return (
    <div>
      <Formik
        initialValues={{
          nDeOperacion: "",
          codigo: "",
          alumno: "",
        }}
        validate={(values) => {
          null;
        }}
        onSubmit={(values) => {
          null;
        }}
      >
        <Form className="px-[1rem] py-[.5rem] bg-[#eee] flex items-end gap-[2rem] mb-[2rem]">
          <FormOption label="Nueva Contraseña" />
          <NewButton label='Guardar' />
        </Form>
      </Formik>
    </div>
  );
}
