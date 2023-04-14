'use client'

import React,{useContext, useState} from 'react'
import {Field} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { pagosNewFormContext } from '@/context/pagosNewFormContext';
import onlyNumFunc from '@/helpers/onlyNumFunc';
import onlyTextFunc from '@/helpers/onlyTextFunc';

interface props
{
    label?:string;
    type?:string;
    options?:Array<string>|undefined;
    name?:string;
    as?:string;
    flex?:number;
    styles?:string
    readonly?:boolean
    stylesInput?:string
    onlyText?:boolean
}

export default function FormOption(props:props)
{
    const
    {
      label,
      type,
      as='input',
      options,
      name,
      styles='',
      readonly=false,
      stylesInput='',
      onlyText=false
    }=props

    const[showPassword,setShowPassword]=useState({show:type==='password',shoPassword:false,type})

    const myStyles = 'relative px-[.4rem] py-[.2rem] h-[30.8px] w-[100%] cursor-auto border-inputBorder border-[1px] focus:border-primary outline-none rounded-[.3rem]';

    const myName = name ||
    label?.toLowerCase()?.split('').map(entry=>
      { 
        if(entry===' ')return'-' 
        return entry
      }).join('')


    return (
      <div className={`flex flex-col relative flex-1 ${styles}`}>
        <label className=" text-slate-500 uppercase whitespace-nowrap overflow-hidden text-ellipsis">
          {label}
        </label>
        <div className="relative">
          {showPassword.show && (
            <button
              className="absolute right-[1rem] z-[999] translate-y-[-50%] top-[50%]"
              onClick={() =>
                setShowPassword((prev) => {
                  return {
                    type: prev.type === "password" ? "text" : "password",
                    show: true,
                    shoPassword: !prev.shoPassword,
                  };
                })
              }
            >
              <FontAwesomeIcon
                icon={showPassword.shoPassword ? faEyeSlash : faEye}
              />
            </button>
          )}
          {type !== "file" && (
            <Field
              name={myName}
              as={options ? "select" : as}
              className={`${myStyles} ${stylesInput} ${
                readonly ? "bg-[#eee] pointer-events-none" : ""
              }`}
              readOnly={readonly}
              size={1}
              type={showPassword.type}
              onKeyPress={(e: any) => {
                if (type === "number") onlyNumFunc(e);
                if (onlyText) onlyTextFunc(e);
              }}
            >
              {options && (
                <>
                  {options.map((opt, pos) => {
                    return (
                      <option key={pos} value={opt}>
                        {opt}
                      </option>
                    );
                  })}
                </>
              )}
            </Field>
          )}
          {type === "file" && <FileField myStyles={myStyles} name={myName} />}
        </div>
      </div>
    );
}


interface isFileInside
{
  isIn:boolean;
  name:string
}
function FileField({myStyles,name}:{myStyles:string,name:string|undefined})
{
  const[isFocus,setIsFocus]=useState<boolean>(false)
  const[isFileInside,setIsFileInside]=useState<isFileInside>({isIn:false,name:''})
  const{setIsOk,isOk}=useContext(pagosNewFormContext)

  const isAllGood =isFileInside.isIn ? isOk : true

  return(
    <>
      <Field
        type={"file"}
        name={name}
        onChange={(e: any) => gettingImg(e, setIsOk, setIsFileInside)}
        className={`${myStyles} opacity-0`}
        accept={"image/png, image/jpeg"}
        onMouseEnter={() => setIsFocus(true)}
        onMouseLeave={() => setIsFocus(false)}
      />
      <div
        className={`absolute pointer-events-none left-0 bottom-0 w-[100%] h-[30.8px] border-[1px] flex justify-around items-center ${
          isAllGood ? "" : "text-red-500 border-red-500"
        } ${
          isFocus
            ? "text-primary border-primary"
            : "text-myBlack border-myBlack"
        }`}
      >
        <span className='max-w-[80%] whitespace-nowrap text-ellipsis overflow-hidden'>
          {isFileInside.isIn&&isOk&&<>{isFileInside.name}</>}
          {!isFileInside.isIn && <>Subir Imagen</>}
          {isFileInside.isIn && !isOk && <>Solo Imagenes PNG o JPG</>}
        </span>
        <FontAwesomeIcon icon={faUpload} />
      </div>
    </>
  );
}

function gettingImg(e:any,setIsOk:React.Dispatch<React.SetStateAction<boolean>>,setIsFileInside:React.Dispatch<React.SetStateAction<isFileInside>>)
{
   const isType= ['image/png','image/jpeg'].some(typ=>typ===e.target.files[0].type)

   if(isType)
   {
     setIsOk(true)
     setIsFileInside({isIn:true,name:e.target.files[0].name})
     return
   }  
   setIsOk(false)
}