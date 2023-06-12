import React from 'react'
import cuota from '../../interfaces/cuota'
import TheCuota from './components/TheCuota/TheCuota'
import { Formik,Form } from 'formik';

export default function AlumnoCuotas({cuotas}:{cuotas:Array<cuota>}) 
{

  return (
    <>
      <div className="flex w-[100%] pr-[6.5rem] pl-[3rem] gap-[1rem]">
        <span className="flex-1 text-center">Cuota</span>
        <span className="flex-1 text-center">Fecha de vencimiento</span>
        <span className="flex-1 text-center">Numero de Operacion</span>
        <span className="flex-1 text-center">Medio de Pago</span>
        <span className="flex-1 text-center">Monto</span>
      </div>
      <Formik initialValues={{}} onSubmit={(values) => {}}>
        <Form>
          {cuotas.map((cuo, pos) => {
            return <TheCuota key={pos} cuo={cuo} pos={pos} />;
          })}
        </Form>
      </Formik>
    </>
  );
}
