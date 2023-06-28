import React from 'react'
import { File } from './File';
import formFileInputProps from '../interfaces/formFileInputProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import file from '@/interfaces/file';

export const FileType = ({state,files,...props}:formFileInputProps) => 
{
    const{multiple}=props

    function handleUpdating(list:FileList|null,state:(prev:any)=>void)
    {
      if(list===null)return
  
      const files = Object.values(list)
      const filesArr:Array<file>= files.map(f=>{return {file:f,id:uuidv4()}} )
      if(multiple)
      {
          state((prev:any)=>{return{...prev,files:[...prev.files,...filesArr]}})
          return
      }
      state((prev:any)=>{return{...prev,files:filesArr}})
    }

  return (
    <>
      <div className="relative">
        <input
          {...props}
          type="file"
          className="opacity-0 h-[8rem] w-[100%]"
          size={1}
          onChange={(e) => handleUpdating(e.target.files, state)}
        />
        <div
          className={`absolute w-[100%] h-[100%] left-0 top-0 pointer-events-none border-[6px] border-green-400 rounded-[1rem] border-dotted flex justify-center items-center  ${
            !multiple && files.length > 0
              ? "bg-green-400 text-[#fff]"
              : "text-green-400"
          }`}
        >
          <p className="flex flex-col justify-center items-center">
            <FontAwesomeIcon size="3x" icon={faFileCirclePlus} />
            {!multiple && files.length > 0 && <span>{files[0].file.name}</span>}
            {(multiple || (!multiple && files.length === 0)) && (
              <span>Arrastra o Agrega archivos</span>
            )}
          </p>
        </div>
      </div>
      {files.length > 0 && multiple && (
        <div>
          <ul className="flex flex-col gap-[.2rem] max-h-[30rem] overflow-y-auto mt-[1rem]">
            {files.map((f) => (
              <File key={f.id} {...f} state={state} />
            ))}
          </ul>
        </div>
      )}
      <div className="flex gap-[1rem] mt-[1rem]">
        {multiple && files.length > 0 && (
          <button
            className="capitalize flex-1 bg-red-500 px-[1rem] py-[.8rem] text-[#fff] rounded-[.5rem] gap-[.5rem] font-bold flex items-center"
            type="button"
            onClick={() =>
              state((prev: any) => {
                return { ...prev, files: [] };
              })
            }
          >
            <FontAwesomeIcon size="2xl" icon={faFileCirclePlus} />
            Borrar todo
          </button>
        )}
      </div>
    </>
  );
}
