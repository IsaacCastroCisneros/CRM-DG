import FormOption from '@/components/FormOption/FormOption'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import NewButton from '@/components/NewButton/NewButton'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import { Form, Formik } from 'formik'
import React from 'react'

export default function NewUser() {
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
         <MyFlexContainer>
           <FormOption label="Correo" type="email" />
           <FormOption label="DNI" type="number" />
         </MyFlexContainer>
         <FormOption label="Clave" type="password" />
         <FormOption label="Nombres" onlyText/>
         <FormOption label="Apellidos"  onlyText/>
         <MyFlexContainer>
           <FormOption label="Telefono" type="number" />
           <FormOption label="celular" type="number" />
         </MyFlexContainer>
         <FormOption label="Telefono" type="Direccion" />
         <MyFlexContainer>
            <FormOption label='departamento' />
            <FormOption label='provincia' />
            <FormOption label='distrito' />
         </MyFlexContainer>
         <FormOption label='referencia' />
         <FormOption label='tipo de comprobante' options={['loool','siii']} />
         <FormOption label='categoria' options={['loool','siii']} />
         <NewButton label='Guardar' type='submit' />
       </Form>
     </Formik>
   );
}
