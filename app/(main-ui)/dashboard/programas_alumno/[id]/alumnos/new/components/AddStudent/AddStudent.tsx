'use client'

import { Formik,Form, Field } from 'formik'
import React,{useState} from 'react'
import FormStudet from './components/FormStudet'
import FormEnvio from './components/FormEnvio/FormEnvio'
import AlumnoCuotas from './components/AlumnoCuotas/AlumnoCuotas'
import cuota from './interfaces/cuota'

const AddStudent=()=> 
{
  const[cuotas,setCuaotas]=useState<Array<cuota>>([])

  return (
    <>
      <Formik
        initialValues={{
          nombres: "fdf",
          apellidos: "fdfd",
          correo: "fdfd@gfg.com",
          telefono: 999,
          dni: 999,
          asesorEncargado: "fdfd",
          medio: "lel",
          tenor: "",
          certificacion: "fd",
          ruc: "",
          razonSocial: "",
          fechaDeInicio: '12/09/1969',
          fechaFin: '12/09/1969',
          horasCertificadas: 5555,
          numeroDeComprobante: 555,
          inversion: 2555,
          cuotas: 3,
          descuento: 15,
          asesorAsignado: "tgert",
          tipoDeComprobante: "fdfd",
        }}
        onSubmit={(values: any) => {
          const fechaDeInicio = formatDate(values.fechaDeInicio);
          const fechaFin = formatDate(values.fechaFin);

          if (values.tipoDeComprobante === "factura") {
            delete values.ruc;
            delete values.razonSocial;
          }

          const finalValues = { ...values, fechaDeInicio, fechaFin };

          let newCuotas: Array<cuota> = [];

          let cuoatasMonto =
          Math.round((((values.inversion - values.descuento) / values.cuotas) + Number.EPSILON) * 100) / 100

          for (let i = 0; i < Number(values.cuotas); i++) {
            newCuotas = [
              ...newCuotas,
              {
                cuota: "",
                fecha: fechaFin,
                nOperacion: "",
                medioDePago: "",
                monto: cuoatasMonto,
              },
            ];
          }

          setCuaotas(newCuotas);

          if (Object.values(finalValues).every((v) => v !== "")) return;
          return;
        }}
      >
        {() => (
          <Form>
            <FormStudet />
            <FormEnvio />
          </Form>
        )}
      </Formik>
      <AlumnoCuotas cuotas={cuotas} />
    </>
  );
}

function formatDate(date:Date|string)
{
  if(typeof date==='string')return ""
  return date.toISOString().split('T')[0]
}

export default AddStudent
