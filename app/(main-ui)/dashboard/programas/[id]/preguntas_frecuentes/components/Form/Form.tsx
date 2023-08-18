"use client"

import React,{useState} from 'react'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { MyForm } from '@/components/MyForm/MyForm'

interface values
{
    question:string
    answer:string
}
interface props {
  question?: string;
  answer?: string;
}


export default function Form({question="",answer=""}:props) 
{
    const [values, setValues] = useState<values>({
      question,
      answer,
    });

  return (
    <MyForm
      submit={async () => null}
      values={values}
      setValues={setValues}
      oneMore={false}
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
