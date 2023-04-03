import React,{Dispatch, SetStateAction} from 'react'

export default function MyFilters({setMyFilter}:{setMyFilter:Dispatch<SetStateAction<{ value: string; property: string; }>>})
{
  return(
    <div className='flex'>
      <select
       className='border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer'
       onChange={(e)=>setMyFilter({value:e.target.value,property:'categoria'})}
       >
        <option value="">Categoria</option>
        <option value="PROF">PROF</option>
      </select>
    </div>
  )
}
