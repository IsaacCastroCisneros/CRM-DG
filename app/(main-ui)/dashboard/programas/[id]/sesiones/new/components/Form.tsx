"use client"
import { MyForm } from '@/components/MyForm/MyForm'
import React, { useState } from 'react'
import session from '../../components/ClientContent/interfaces/session'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';

export default function Form() 
{
  const [values, setValues] = useState<session>({
    title: "",
    id:"",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  });

  return (
    <MyForm submit={async () => null} values={values} setValues={setValues} >
      <MyFormInput
        name="title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
      />
      <MyFormInput
        name="content"
        textEditor
        value={values.content}
        onChange={(e) => setValues({ ...values, content: e.target.getContent() })}
      />
      <MyFlexContainer>
        <MyFormInput
          name="date"
          type='date'
          value={values.date}
          onChange={(e) => setValues({ ...values, date: e.target.value })}
        />
        <MyFormInput
          value={values.horaInicio}
          type='time'
          name="horaInicio"
          onChange={(e) =>
            setValues({ ...values, horaInicio: e.target.value })
          }
        />
        <MyFormInput
          value={values.horaTermino}
          name="horaTermino"
          type='time'
          onChange={(e) =>
            setValues({ ...values, horaTermino: e.target.value })
          }
        />
        <MyFormInput
          value={values.tipoDeTransmision}
          options={['tipo','tipo']}
          name="tipoDeTransmision"
          onChange={(e) =>
            setValues({ ...values, tipoDeTransmision: e.target.value })
          }
        />
      </MyFlexContainer>
    </MyForm>
  );
}
