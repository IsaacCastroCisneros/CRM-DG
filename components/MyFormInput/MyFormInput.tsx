import React, { InputHTMLAttributes } from 'react'
import {twMerge} from 'tailwind-merge'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  options?:Array<any>
}

export const MyFormInput = ({className,type='text',...props} :props) => 
{
  const{name,options}=props
 
  const def= 'py-[.3rem] px-[.5rem] outline-none outline-none rounded-[.4rem] focus:border-primary border-[1px]'

  const c = twMerge(`${def} bg-slate-200`,className)
  const cs= twMerge(`${def}`,className)

  const label = name?.replace(/([a-z])([A-Z])/g,"$1 $2").toLocaleLowerCase(); 

  return (
    <div className='flex flex-col flex-1'>
        <label className='capitalize'>{label}&nbsp;:</label>
        {
          !options&&<input {...props} className={c} type={type} size={1}  />
        }
        {
          options&&
          <select size={1} className={cs}>
            {
                options.map((op,pos)=>(
                   <option key={pos} value={op} >
                      {op}
                   </option>
                ))
            }
          </select>
        }
    </div>
  )
}
