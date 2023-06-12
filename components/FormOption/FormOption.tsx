'use client'

import React,{useContext, useEffect, useState} from 'react'
import {Field, useFormikContext} from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUpload } from '@fortawesome/free-solid-svg-icons';
import { pagosNewFormContext } from '@/context/pagosNewFormContext';
import MyAwesomeField from './components/MyAwesomeField/MyAwesomeField';
import showPassword from './interfaces/showPassword';
import isRequired from '@/helpers/isRequired';

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
    onlyText?:boolean,
    onChange?:(e:any)=>void
    error?:any,
    render?:React.ReactNode,
    noLabel?:boolean,
    customError?:boolean
}

const FormOption=(props:props)=>
{
    const
    {
      label='',
      type='text',
      options=[],
      name,
      styles='',
      readonly=false,
      stylesInput='',
      onlyText=false,
      onChange=()=>null,
      render,
      noLabel,
      customError,
    }=props

    const{errors:error,validateForm}:any=useFormikContext()

    useEffect(()=>
    {
      validateForm()
    },[])

    const[showPassword,setShowPassword]=useState<showPassword>({show:type==='password',shoPassword:false,type})

    const regExp=/[\s]\w/ig;
    
    let myName:string=''

    if(name)
    {
      myName = name
    }
    else if(label!=='')
    {
      myName=label.toLowerCase().replace(regExp,(match)=>
      {
        return match[1].toUpperCase();
      });
    }
    
    const myError = error ? error[myName] :false

    const myStyles = `relative px-[.4rem] py-[.2rem] h-[30.8px] w-[100%] cursor-auto border-[1px] focus:border-primary outline-none rounded-[.3rem] ${myError==='error'?'border-red-500':'border-inputBorder'}`;

    return (
      <div className={`flex flex-col relative flex-1 ${styles}`}>
        {!noLabel && (
          <label className=" text-slate-500 uppercase whitespace-nowrap overflow-hidden text-ellipsis">
            {label}
          </label>
        )}
        <div className="relative">
          {render && <>{render}</>}
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
          {type !== "file"&& (
            <MyAwesomeField
              name={myName}
              readonly={readonly}
              stylesInput={stylesInput}
              onlyText={onlyText}
              type={type}
              options={options}
              onChange={onChange}
              label={label}
              showPassword={showPassword}
              validate={isRequired}
              error={customError}
            />
          )}
          {type === "file" && !onChange && (
            <FileField myStyles={myStyles} name={myName} />
          )}
        </div>
      </div>
    );
}


interface isFileInside
{
  isIn:boolean;
  name:string
}

const FileField=({myStyles,name}:{myStyles:string,name:string|undefined})=>
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

const gettingImg=(e:any,setIsOk:React.Dispatch<React.SetStateAction<boolean>>,setIsFileInside:React.Dispatch<React.SetStateAction<isFileInside>>)=>
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



export default FormOption