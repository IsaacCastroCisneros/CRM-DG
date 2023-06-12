import myNormalInput from '@/styles/myNormalInput'
import { useField, useFormikContext } from 'formik'
import React from 'react'

interface props
{
   onChange:(e:any)=>void,
   options?:Array<string>,
   name:string
}

export default function Render(props:props) 
{
  const {onChange,options} =props  

  const{setFieldValue}=useFormikContext()
  const [field]=useField<any>(props)

  return (
    <>
      {options && (
        <select className={myNormalInput} onChange={(e) => 
        {
          setFieldValue(field.name,e.target.value)
          onChange(e)
        }}>
          {options.map((opt: string, pos: number) => {
            return (
              <option key={pos} value={opt.toLowerCase()}>
                {opt}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}
