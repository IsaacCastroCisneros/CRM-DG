'use client'

import React, { useEffect, useState } from 'react'
import FormContainer from '../FormContainer'
import FormOption from '@/components/FormOption/FormOption'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import MyNormalSelect from '@/components/MyNormalSelect/MyNormalSelect'
import DatePickerField from '@/components/DataPickerField/DatePickerField'
import MyButtonSubmit from '@/components/MyButtonSubmit/MyButtonThin'
import { faDollar } from '@fortawesome/free-solid-svg-icons'
import isRequired from '@/helpers/isRequired'
import { useFormikContext } from 'formik'

const FormEnvio=()=> 
{
  const[comprobante,setComprobante]=useState('boleta')
  const[maxDiscount,setMaxDiscount]=useState<number>(0)
  const[discountErr,setdiscountErr]=useState<boolean>(false)
  const{validateForm}=useFormikContext()

  useEffect(()=>
  {
     validateForm()
  },[comprobante])


  return (
    <FormContainer>
      <MyFlexContainer>
        <FormOption label="TENOR" options={["SIAF", "SIAF"]} />
        <FormOption label="CERTIFICACION" />
        <FormOption
          label="tipo de comprobante"
          options={["Boleta", "Factura"]}
          onChange={(e)=>setComprobante(e.target.value.toLowerCase())}
        />
      </MyFlexContainer>
      {comprobante === "factura" && (
        <>
          <MyFlexContainer>
            <FormOption type="number" label="RUC" />
            <FormOption label="Razon social" />
          </MyFlexContainer>
        </>
      )}
      <MyFlexContainer>
        <MyNormalSelect label="Fecha de Inicio">
          <DatePickerField name="fechaDeInicio" validate={isRequired} />
        </MyNormalSelect>
        <MyNormalSelect label="Fecha Fin">
          <DatePickerField name="fechaFin" validate={isRequired} />
        </MyNormalSelect>
        <FormOption label="Horas Certificadas" type="number" />
      </MyFlexContainer>
      <MyFlexContainer>
        <FormOption label="Numero De comprobante" type="number" />
        <FormOption
          label="inversion"
          onChange={(e)=>setMaxDiscount(e.target.value||0)}
          type="number"
          stylesInput="pl-[1.5rem]"
          render={<MySoles />}
        />
        <FormOption label="Cuotas" options={["01", "02", "03"]} />
        <FormOption
          label="Descuento"
          type="number"
          onChange={(e)=>
            {
              if(Number(e.target.value)>maxDiscount)
              {
                 return setdiscountErr(true)
              }
              setdiscountErr(false)
            }}
          customError={discountErr}
          stylesInput="pl-[1.5rem]"
          readonly={maxDiscount===0}
          render={<MySoles />}
        />
        <FormOption label="Asesor Asignado" options={["Alex", "Jose"]} />
      </MyFlexContainer>
      <MyButtonSubmit label="Generar Cuotas" icon={faDollar} error={discountErr} />
    </FormContainer>
  );
}

function MySoles()
{
  return(
    <div className='absolute top-[50%] translate-y-[-50%] text-[#000] z-[9999] left-[.5rem]'>S/.</div>
  )
}


export default FormEnvio
