"use client"

import { faCheckCircle, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ButtonHTMLAttributes, Dispatch, SetStateAction, useState } from 'react'
import useClickOutside from '@/hooks/useClickOutside';
import { FileType } from './components/FileType';
import formFileInputProps from './interfaces/formFileInputProps';
import { UrlType } from './components/UrlType';


export const FormFileInput = (props:formFileInputProps) => 
{
  const[type,setType]=useState<'file'|'link'>('file')
  const[showSubmenu,setShowSubmenu]=useState<boolean>(false)

  const {ref} = useClickOutside(()=>setShowSubmenu(false))

  return (
    <>
      {type === "file" && <FileType {...props} />}
      {type === "link" && <UrlType/>}
      <div className="capitalize flex flex-1 bg-green-500 text-[#fff] rounded-[.5rem] font-bold items-stretch">
        <button
          type="button"
          onClick={() => null}
          className="flex border-[1px] rounded-[.5rem_0px_0px_.5rem] border-[#fff] flex-1 px-[1rem] py-[.8rem] items-center gap-[2rem]"
        >
          <FontAwesomeIcon size="2xl" icon={faCheckCircle} />
          Subir
        </button>
        <div
          className="w-[3rem] flex relative rounded-[0px_.5rem_.5rem_0px] border-[1px] border-[#fff]"
          ref={ref}
        >
          <button
            className="flex w-[100%] justify-center items-center"
            type="button"
            onClick={() => setShowSubmenu((prev) => !prev)}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
          {showSubmenu && (
            <ul className="shadow-2xl absolute top-[100%] right-0 text-[#fff] bg-slate-700 flex flex-col">
              <Button
                label="Por Archivo"
                setShowSubmenu={setShowSubmenu}
                onClick={() => setType("file")}
              />
              <Button
                label="Por Url"
                setShowSubmenu={setShowSubmenu}
                onClick={() => setType("link")}
              />
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>
{
   label:string,
   setShowSubmenu:Dispatch<SetStateAction<boolean>>
}

function Button({label,setShowSubmenu,...props}:buttonProps)
{
  const {opt} = useClickOutside(()=>setShowSubmenu(false))

  return (
    <button
      {...props}
      ref={opt}
      type="button"
      className="px-[1rem] py-[.6rem] whitespace-nowrap hover:bg-blue-600 hover:text-[#fff]"
    >
      {label}
    </button>
  );
}