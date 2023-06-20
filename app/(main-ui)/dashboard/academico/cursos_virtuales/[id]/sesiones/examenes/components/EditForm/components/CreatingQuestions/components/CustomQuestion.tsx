'use client'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React,{useState} from 'react'
import { Dispatch,SetStateAction} from 'react'
import question from '../interface/question'

interface props
{
 setCustomQuestions:Dispatch<SetStateAction<Array<question>>>,
 id:string
 questions:Array<question>
}

export const CustomQuestion = ({setCustomQuestions,id,questions}:props) => 
{
    const[options,setOptions]=useState<Array<string>>([''])

    function updating(e:any,pos:number)
    {
      const newOptions = [...options]
      newOptions[pos]= e.target.value
      setOptions(newOptions)
  
      const newQuestions = [...questions]
      const i = newQuestions.findIndex((p:any) => p.id === id);
      newQuestions[i].options=options
      setCustomQuestions(newQuestions)
    }

    function updatingQuestion(e:any,id:string)
    {
       const newQuestions=[...questions]
       const i = newQuestions.findIndex(n=>n.id===id)
       newQuestions[i]['question']=e.target.value
       setCustomQuestions(newQuestions)
    }
  
    return (
      <>
        <MyFormInput
          name="question"
          onChange={(e) =>updatingQuestion(e,id)}
        />
        <button type='button' onClick={()=>setOptions([...options,''])}>
          add option
        </button>
        {options.map((op,pos) => (
          <MyFormInput
            key={pos}
            value={op}
            onChange={(e)=>updating(e,pos)}
          />
        ))}
      </>
    );
}
