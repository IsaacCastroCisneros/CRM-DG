"use client"
import { MyForm } from '@/components/MyForm/MyForm';
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import { SwitchInput } from '@/components/SwitchInput/SwitchInput';
import React,{useState} from 'react'

const defaultValues={
  nombreDeCategoria: "",
  estado: false,
}

export default function CategoriaForm() 
{
  const [values, setValues] = useState(defaultValues);

  return (
    <MyForm
      label="crear"
      setValues={setValues}
      values={values}
      defaultValues={defaultValues}
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
