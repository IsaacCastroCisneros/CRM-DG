import React, { Dispatch, SetStateAction } from 'react'
import question from '../interface/question'

interface props
{
  question:string
  options:Array<string>
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

  /*  function handleUpdatingOptions(pos,e)
   {
      const {arr,i} = gettinCurrent('','',true) as justArray

      arr[i].options[pos]=e.target.value
   } */

   function handleAddingOption()
   {
      const update = gettinCurrent('options',[...options,'']) as Array<question>

      setCustomQuestions(update)
   }

    return(
        <section className='bg-slate-700 rounded-[.5rem]'>
          <p className='text-blue-200 p-[.5rem] font-medium'>
              <textarea className='resize-none' value={question} onChange={(e)=>handleUpdating(e)} ></textarea>
          </p>
          <ul>
              {
                options.map((op,pos)=>
                  (
                      <li key={pos} className='flex items-center text-[#fff] px-[.5rem] py-[.2rem] border-b-[1px] border-gray-400 gap-[1rem]'>
                          <label className='block flex-1'>
                            <input type="text" value={op} />
                          </label>
                          <input type='radio' name={id} value={pos}/>
                      </li>
                  ))
              }
              <button type='button' onClick={handleAddingOption} >add</button>
          </ul>
        </section>
      )
}


