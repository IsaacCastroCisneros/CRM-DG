"use client"

import React,{useEffect, useState} from 'react'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { MyForm } from '@/components/MyForm/MyForm'
import validatingRequired from '@/helpers/validateRequired'

interface values
{
    question?:string
    answer?:string
}

const defaultValues={
  question:"",
  answer:"",
}

export default function Form({question="",answer=""}:values) 
{
    const [values, setValues] = useState<values>(defaultValues);

    useEffect(()=>
    {
      setValues({question,answer})
    },[])

    const isValid=validatingRequired(values,['question','answer'])

  return (
    <MyForm
      submit={async () => null}
      values={values}
      setValues={setValues}
      oneMore={false}
      defaultValues={defaultValues}
      isBack
      isValid={isValid}
    >
      <MyFormInput
        name="question"
        value={values.question}
        onChange={(e) => setValues({ ...values, question: e.target.value })}
      />
      <MyFormInput
        name="answer"
        type="textarea"
        value={values.answer}
        onChange={(e) => setValues({ ...values, answer: e.target.value })}
      />
    </MyForm>
  );
}
