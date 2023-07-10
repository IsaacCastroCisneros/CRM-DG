import FormOption from '@/components/FormOption/FormOption'
import { Form, Formik } from 'formik'
import {MyButton} from '@/components/MyButton/MyButton'
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
          <MyButton>Guardar</MyButton>
        </Form>
      </Formik>
    </div>
  );
}
