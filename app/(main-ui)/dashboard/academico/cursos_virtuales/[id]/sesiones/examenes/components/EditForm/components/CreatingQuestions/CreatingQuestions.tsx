"use client"
import React, { useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import question from './interface/question';
import { Question } from './components/Question';
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink';

export const CreatingQuestions = () => 
{
  const [customQuestions, setCustomQuestions] = useState<Array<question>>([]);

  return (
    <>
      <MyButtonLink
        label='Crear Pregunta'
        className='mb-[1rem]'
        onClick={() =>
          setCustomQuestions((prev) => {
            return [
              ...prev,
              {
                question: "",
                id: uuidv4(),
                options: [{label:'',correct:false}],
              },
            ];
          })
        }></MyButtonLink>
      <div className='flex gap-[.5rem] flex-col-reverse'>
      {customQuestions.map((q) => (
        <Question key={q.id} {...q} customQuestions={customQuestions} setCustomQuestions={setCustomQuestions} />
      ))}
      </div>
    </>
  );
}
