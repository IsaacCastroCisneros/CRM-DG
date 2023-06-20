"use client"
import React, { useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { CustomQuestion } from './components/CustomQuestion';
import question from './interface/question';
import { Question } from './components/Question';

export const CreatingQuestions = () => 
{
  const [customQuestions, setCustomQuestions] = useState<Array<question>>([]);

  return (
    <>
      <button
        type='button'
        onClick={() =>
          setCustomQuestions((prev) => {
            return [
              ...prev,
              {
                question: "",
                id: uuidv4(),
                options: [''],
              },
            ];
          })
        }
      >
        Crear Pregunta
      </button>
      {/* {customQuestions.map((q,pos) => (
        <CustomQuestion
          key={pos}
          {...q}
          questions={customQuestions}
          setCustomQuestions={setCustomQuestions}
        />
      ))} */}
      {customQuestions.map((q) => (
        <Question key={q.id} {...q} customQuestions={customQuestions} setCustomQuestions={setCustomQuestions} />
      ))}
    </>
  );
}
