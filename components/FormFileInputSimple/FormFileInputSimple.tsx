import camelToNormal from '@/helpers/camelToNormal';
import input from '@/styles/input';
import inputContainer from '@/styles/inputContainer';
import inputLabel from '@/styles/inputLabel';
import { faImage, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'

interface props extends InputHTMLAttributes<HTMLInputElement>
{
  name:string
}

export const FormFileInputSimple = ({name,...props}:props) => 
{
  const myName= camelToNormal(name)
  const[file,setFile]=useState<File|null>(null)

  function handleUpdatingFile(e:ChangeEvent<HTMLInputElement>)
  {
    if (e.target.files === null) return;

    if (
      e.target.files[0].type === "image/jpeg" ||
      e.target.files[0].type === "image/webp" ||
      e.target.files[0].type === "image/png"
    ) {
      setFile(e.target.files[0]);
    }
  }

  return (
    <div className={inputContainer}>
      <label
        className={`${inputLabel} capitalize max-w-[25rem] overflow-hidden whitespace-nowrap text-ellipsis`}
      >
        {file?.name || myName}
      </label>
      <div className="flex">
        <input type="text" className={`${input} flex-1`} />
        <div className="relative w-fit">
          <div className="relative w-fit hover:cursor-pointer">
            <FontAwesomeIcon size="2xl" icon={faImage} />
            <div className="bg-[#fff] w-fit h-[14.39px] flex items-start rounded-[100%] right-[-.2rem] bottom-[-.2rem] absolute">
              <FontAwesomeIcon icon={faPlusCircle} />
            </div>
          </div>
          <input
            type="file"
            {...props}
            onChange={handleUpdatingFile}
            className="opacity-0 left-0 top-0 w-[100%] h-[100%] absolute hover:!cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
