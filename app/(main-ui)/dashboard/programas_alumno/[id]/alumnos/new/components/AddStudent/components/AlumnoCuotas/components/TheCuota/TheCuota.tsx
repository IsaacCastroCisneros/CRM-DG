'use client'

import DatePickerField from '@/components/DataPickerField/DatePickerField';
import FormOption from '@/components/FormOption/FormOption';
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import isRequired from '@/helpers/isRequired';
import { Form, Formik } from 'formik';
import React ,{useState} from 'react'
import cuota from '../../../../interfaces/cuota';

interface props
{
  pos:number,
  cuo:cuota
}

export default function TheCuota(props:props) 
{
  const{pos,cuo}=props  


  return (
    <div className="px-[3rem] py-[1rem] bg-myGray mb-[.5rem]">
      <Formik
        initialValues={{
          cuota: `RP-0${pos + 1}`,
          fechaDeVencimiento: cuo.fecha,
          nOperacion: "",
          medioDePago: "",
          montoCuota: cuo.monto,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <MyFlexContainer margin={false}>
            <FormOption name="cuota" noLabel />
            <FormOption
              name="nOperacion"
              type="number"
              noLabel
            
            />
            <FormOption
              name="medioDePago"
              options={["BCP", "Interbank", "BBVA"]}
              noLabel
            
            />
            <FormOption name="montoCuota" noLabel />
          </MyFlexContainer>
        </Form>
      </Formik>
    </div>
  );
}
