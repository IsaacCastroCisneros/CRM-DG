"use client"
import { MyForm } from '@/components/MyForm/MyForm'
import React, { useEffect, useState } from 'react'
import session from './KanbanBoard/interfaces/session'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import validatingRequired from '@/helpers/validateRequired';

const defaultValues ={
  title: "",
  content: "",
  date: "",
  horaInicio: "",
  horaTermino: "",
  tipoDeTransmision: "",
}
 
interface mySession extends Partial<Omit<session,'id'>>
{

}


export default function Form(props:mySession) 
{
  const [values, setValues] = useState<mySession>(defaultValues);

  const{content,...myValues}=values
  
  const isValid = validatingRequired(myValues)

  useEffect(()=>
  {
    const{title="",content="",date="",horaInicio="",horaTermino="",tipoDeTransmision=""}=props
    setValues({title,content,date,horaInicio,horaTermino,tipoDeTransmision})
  },[])

  return (
    <MyForm
      submit={async () => null}
      values={values}
      setValues={setValues}
      isValid={isValid}
      defaultValues={defaultValues}
      oneMore={false}
      specificCondition={(value)=>value.content===""}
      isBack
    >
      <MyFormInput
        name="title"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value })}
      />
      <MyFormInput
        name="content"
        textEditor
        value={values.content}
        onChange={(e) =>
          setValues({ ...values, content: e.target.getContent() })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          name="Fecha"
          type="date"
          value={values.date}
          onChange={(e) => setValues({ ...values, date: e.target.value })}
        />
        <MyFormInput
          value={values.horaInicio}
          type="time"
          name="horaInicio"
          onChange={(e) => setValues({ ...values, horaInicio: e.target.value })}
        />
        <MyFormInput
          value={values.horaTermino}
          name="horaTermino"
          type="time"
          onChange={(e) =>
            setValues({ ...values, horaTermino: e.target.value })
          }
        />
        <MyFormInput
          value={values.tipoDeTransmision}
          options={["tipo", "tipo"]}
          name="tipoDeTransmision"
          onChange={(e) =>
            setValues({ ...values, tipoDeTransmision: e.target.value })
          }
        />
      </MyFlexContainer>
    </MyForm>
  );
}
