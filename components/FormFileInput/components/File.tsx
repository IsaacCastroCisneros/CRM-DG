import file from '@/interfaces/file'
import { faFile, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Dispatch, SetStateAction } from 'react'

interface props extends file
{
  state:Dispatch<SetStateAction<any>>
}

export const File = (props:props) => 
{
    const{name}=props.file
    const{state,id}=props
  
    function deletingFile(id:string)
    {
      state((prev:any)=>
        {
          return {...prev,files:prev.files.filter((p:any)=>p.id!==id)}
        })
    }
  
    return (
      <li className="flex items-center bg-slate-700 text-[#fff] px-[.5rem] py-[.4rem] gap-[.6rem] rounded-[.5rem]">
        <FontAwesomeIcon icon={faFile} />
        <span>{name}</span>
        <button onClick={()=>deletingFile(id)} ><FontAwesomeIcon icon={faXmark}/></button>
      </li>
    );
}


