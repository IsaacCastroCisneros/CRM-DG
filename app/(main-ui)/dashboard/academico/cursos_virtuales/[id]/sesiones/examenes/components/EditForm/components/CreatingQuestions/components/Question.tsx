"use client"

import React, { Dispatch, SetStateAction, useState } from 'react'
import question from '../interface/question'
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import option from '../interface/options'
import { CloseButton } from '@/components/CloseButton/CloseButton'
import { QuestionOption } from './Question/components/QuestionOption'

interface props
{
  question:string
  options:Array<option>
  id:string
  setCustomQuestions:Dispatch<SetStateAction<Array<question>>>
  customQuestions:Array<question>
}

interface justArray
{arr:Array<question>,i:number}

export const Question = (props:props) => 
{
   const
   {
    question='',
    options,
    id,
    customQuestions,
    setCustomQuestions
   }=props

   const field ="border-[1px] outline-none bg-slate-800  px-[.5rem] py-[.2rem] border-gray-400 rounded-[.3rem] relative focus:border-blue-300 resize-none flex-1"

   function gettinCurrent(property:string,change:any,justArray:boolean=false):Array<question>| justArray
    {
        const newEntry:Array<question> = [...customQuestions]
        const i = newEntry.findIndex(n=>n.id===id)

        if(justArray)return {arr:newEntry,i}

        newEntry[i][property]=change

        return newEntry
    }

   function handleUpdating(e:any)
   {
      const update = gettinCurrent('question',e.target.value) as Array<question>

      setCustomQuestions(update) 
   }

   function handleUpdatingOptions(pos:number,change:any,newOptions:boolean=false)
   {
      const {arr,i} = gettinCurrent('','',true) as justArray
      
      if(newOptions)
      {
         const myOptions:Array<option> = options.map((o,myPos)=>
          {
            if (pos === myPos) {
              o.correct = true;
              return o;
            }

            o.correct = false;
            return o;
          })
          
          arr[i].options=myOptions
          
          setCustomQuestions(arr)
          return
      }

      arr[i].options[pos].label=change

      setCustomQuestions(arr)
   }

   function handleAddingOption()
   {
      const update = gettinCurrent('options',[...options,{label:'',correct:false}]) as Array<question>

      setCustomQuestions(update)
   }

   function handleDeleteQuestion()
   {
      const update = customQuestions.filter(c=>c.id!==id)
      setCustomQuestions(update)
   }

   function handleDeleteOption(pos:number)
   {
      const{arr:update,i}=gettinCurrent('','',true) as justArray

      update[i].options.splice(pos,1)

      setCustomQuestions(update)
   }

    return (
      <section className="bg-slate-700 rounded-[.5rem] p-[.5rem] relative">
        <textarea
          className={`${field} h-[5rem] w-[100%] text-blue-200`}
          value={question}
          onChange={(e) => handleUpdating(e)}
          placeholder="Pregunta"
        ></textarea>
        <ul className="mb-[.5rem] flex flex-col gap-[.5rem]">
          {options.map((op, pos) => (
            <QuestionOption key={pos} pos={pos} op={op} field={field} handleUpdatingOptions={handleUpdatingOptions} id={id} handleDeleteOption={handleDeleteOption} />
          ))}
        </ul>
        <CloseButton onClick={handleDeleteQuestion} />
        <MyButtonLink
          label="Agregar"
          icon={faPlusCircle}
          className=""
          onClick={handleAddingOption}
        />
      </section>
    );
}



