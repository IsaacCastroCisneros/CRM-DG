import { FormFileInputSimple } from '@/components/FormFileInputSimple/FormFileInputSimple'
import React from 'react'
import step from '../../../interfaces/step'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { CustomSelector } from '@/components/CustomSelector/CustomSelector'

export const Seo = ({values,setValues}:step) => 
{
  return (
    <>
      <CustomSelector name="Meta (Palabras Claves)" />
      <MyFormInput
        type="textarea"
        value={values.metaDescripcion}
        name="metaDescripcion"
        onChange={(e) =>
          setValues({ ...values, metaDescripcion: e.target.value })
        }
      />
      <FormFileInputSimple value={values.metaImagen} name="Meta Imagen" />
    </>
  );
}
