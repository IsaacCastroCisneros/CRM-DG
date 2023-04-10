import { Form, Formik } from 'formik'
import FormOption from '@/components/FormOption/FormOption';
import React from 'react'

export default function ActualizarPago()
{
  return (
    <Formik initialValues={{}} onSubmit={(values)=>console.log(values)}>
      <Form className="gap-[1rem] flex flex-col">
        <div className="flex gap-[1rem]">
          <FormOption styles="flex-[1]" label="monto cuota" />
          <FormOption styles="flex-[1]" label="medio pago" options={["fdfd"]} />
          <FormOption styles="flex-[1.3]" label="asesor" options={["sheyla"]} />
          <FormOption
            styles="flex-[2]"
            label="marketero"
            options={["marketero"]}
          />
        </div>
        <div className="flex gap-[1rem]">
          <FormOption
            styles="flex-[2.2]"
            label="fecha de vencimiento"
            type="date"
          />
          <FormOption styles="flex-[1.8]" label="num de operacion" />
          <FormOption
            styles="flex-[2.5]"
            label="medio contacto"
            options={["whatss"]}
          />
          <FormOption styles="flex-[2.2]" label="foto del voucher" type='file' />
        </div>
        <button
          type="submit"
          className="px-[2rem] inline-block mr-[auto] bg-primary text-myWhite py-[.4rem] rounded-[.3rem] mt-[3rem] hover:opacity-[.8] transition-all duration-200"
        >
          Guardar
        </button>
      </Form>
    </Formik>
  );
}
