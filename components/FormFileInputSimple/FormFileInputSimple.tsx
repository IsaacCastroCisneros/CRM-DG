import { faTrashCan, faUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const FormFileInputSimple = ({name}:{name:string}) => 
{
  return (
    <div className='flex-1'>
      <span className='capitalize' >{name}</span>
      <div className="bg-slate-700 border-slate-400 border-[1px] rounded-[.3rem] p-[.6rem] flex gap-[1rem] ">
        <div
          className="relative bg-green-400 text-[#fff] px-[.7rem] py-[.3rem] w-[4rem] rounded-[.3rem] flex justify-center"
          title="subir archivo"
        >
          <input
            type="file"
            size={1}
            className="absolute opacity-0 top-0 left-0 w-[100%] h-[100%]"
          />
          <FontAwesomeIcon icon={faUpload} />
        </div>
        <div className="flex-1 flex rounded-[.3rem] overflow-hidden">
          <input
            className="flex-1 bg-slate-500 outline-none rounded-[.3rem_0px_0px_.3rem] focus:border-green-400 border-[1px] border-transparent px-[.6rem] py-[.2rem] text-[#fff]"
            type="text"
          />
          <button
            type="button"
            className="bg-red-500 text-[#fff] w-[3rem] flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
        </div>
      </div>
    </div>
  );
}
