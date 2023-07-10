import FormOption from '@/components/FormOption/FormOption';
import { MyButton } from '@/components/MyButton/MyButton';
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import { Form, Formik } from 'formik'
import React from 'react'

export default function EditUser() 
{

  return (
    <RegularPopup title='Editar usuario' content={<MyForm/>} />
  )
}

function MyForm()
{
    return (
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
        <Form className="flex flex-col gap-[1rem]">
          <MyFlexContainer>
            <FormOption label="correo" />
            <FormOption label="dni" type="number" />
          </MyFlexContainer>
          <FormOption label="Nombres" />
          <FormOption label="Apeliidos" />
          <MyFlexContainer>
            <FormOption label="telefono" />
            <FormOption label="celular" />
          </MyFlexContainer>
          <FormOption label="direccion" />
          <MyFlexContainer>
            <FormOption label="departamento" />
            <FormOption label="provincia" />
            <FormOption label="distrito" />
          </MyFlexContainer>
          <FormOption label="referencia" />
          <MyFlexContainer>
            <FormOption label="tipo de comprabante" options={["hmm", "lel"]} />
            <FormOption label="Ruc" options={["hmm", "lel"]} />
          </MyFlexContainer>
          <FormOption label="razón" />
          <FormOption label="categoria" options={["yeeei", "leeel"]} />
          <div className='flex justify-end'>
            <MyButton type="submit">guardar</MyButton>
          </div>
        </Form>
      </Formik>
    );
}
