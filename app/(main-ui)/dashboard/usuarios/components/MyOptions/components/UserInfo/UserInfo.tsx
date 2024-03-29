import React, { useState } from 'react'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import FormOption from '@/components/FormOption/FormOption'
import { Form, Formik } from 'formik'
import ChangePassord from './components/ChangePassord'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyButton } from '@/components/MyButton/MyButton'

export default function UserInfo({nombre}:{nombre:string}) 
{

  return (
    <RegularPopup content={<MyForm/>} title={nombre}/>
  )
}

function MyForm()
{
    const[isPassWordChanging,setIsPassWordChanging]=useState<boolean>(false)

    return (
      <>
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
          <Form className="flex flex-col gap-[.8rem] mb-[2rem]">
            <MyFlexContainer>
              <FormOption label="dni" readonly={true}  />
              <FormOption label="telefono" readonly={true}  />
            </MyFlexContainer>
            <MyFlexContainer>
              <FormOption
                label="Fecha de nacimiento: (Año-Mes-Día)"
                readonly={true}
              />
              <FormOption
                label="entidad donde labora"
                readonly={true}
              />
            </MyFlexContainer>
            <FormOption
              label="Dirección de envío:"
              readonly={true}
            />
            <FormOption label="Referencia:" readonly={true}  />
            <MyFlexContainer>
              <FormOption label="departamento:" readonly={true}  />
              <FormOption label="provincia:" readonly={true}  />
              <FormOption label="distrito:" readonly={true}  />
            </MyFlexContainer>
            <MyFlexContainer>
              <FormOption
                label="Comprobante de Pago:"
                readonly={true}
              />
              <FormOption label="Celular:" readonly={true}  />
              <FormOption
                label="*Activo:"
                readonly={true}
                stylesInput={"!bg-[#5aa95a] !text-[#fff]"}
              />
            </MyFlexContainer>
            <FormOption label="clave:" readonly={true}/>
          </Form>
        </Formik>
        {
          isPassWordChanging&&<ChangePassord/>
        }
        <div className="flex justify-end">
          <MyButton onClick={()=>setIsPassWordChanging(true)} >cambiar password</MyButton>
        </div>
      </>
    );
}



