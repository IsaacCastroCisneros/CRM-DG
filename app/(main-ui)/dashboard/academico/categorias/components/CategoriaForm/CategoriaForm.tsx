"use client"
import { MyForm } from '@/components/MyForm/MyForm';
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import { SwitchInput } from '@/components/SwitchInput/SwitchInput';
import React,{useState} from 'react'

export default function CategoriaForm() 
{
  const [values, setValues] = useState({
    nombreDeCategoria: "",
    estado: false,
  });

  return (
    <MyForm
      label="crear"
      setValues={setValues}
      values={values}
      submit={async () => null}
    >
      <MyFormInput
        name="nombreDeCategoria"
        value={values.nombreDeCategoria}
        onChange={(e) =>
          setValues({ ...values, nombreDeCategoria: e.target.value })
        }
      />
      <SwitchInput
        name="estado"
        checked={values.estado}
        onChange={(e) => setValues({ ...values, estado: e.target.checked })}
      />
    </MyForm>
  );
}
