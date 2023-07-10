import FormOption from '@/components/FormOption/FormOption';
import { MyButton } from '@/components/MyButton/MyButton';
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import { Form, Formik } from 'formik'
import React from 'react'

export default function NewUserLite() 
{
  return (
    <RegularPopup title='Registrar Nuevo Usuario' content={<MyForm/>} />
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
       <Form className='flex flex-col gap-[1rem]'>
         <FormOption label='Correo' type='email' />
         <FormOption label='Clave' type='password' />
         <FormOption label='Nombres' onlyText/>
         <FormOption label='Apellidos' onlyText/>
         <MyButton>Guardar</MyButton>
       </Form>
     </Formik>
   );
}


