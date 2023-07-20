"use client"

import React, { Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react'
import { MyButton } from '@/components/MyButton/MyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { MyLink } from '@/components/MyLink/MyLink'
import { useRouter } from 'next/navigation'
import appContext from '@/context/appContext'

interface props
{
  children:ReactNode
  label?:string
  submit:()=>Promise<any>
  fragment?:ReactNode
  values:Record<any,any>
  setValues:Dispatch<SetStateAction<any>>
  path?:string
  stepsMax?:number 
  oneMore?:boolean
}

export const MyForm = (props:props) => 
{
  const
  {
    children,
    label,
    submit,
    fragment,
    values,
    setValues,
    stepsMax=1,
    path,
    oneMore=true,
  }=props

  const[isBack,setIsBack]=useState<boolean>(false)
  const router = useRouter()
  const{setShowNoti}=useContext(appContext)

  const currentStep= values.step||1

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await submit();
        setShowNoti({ show: true, type: "success" });

        if (!isBack) 
        {
          const valuesArr = Object.keys(values);
          const emptyValues: any = {};
          valuesArr.forEach((v: any) => {
            if (v === "step") {
              emptyValues[v] = 1;
              return;
            }
            emptyValues[v] = "";
          });
          setValues(emptyValues);
        }
        if (isBack) router.back();
      }}
    >
      <div className="mb-[7rem]">{children}</div>
      {fragment}
      <div className="flex gap-[2rem] justify-end mt-[0]">
        <div className="flex gap-[.5rem]">
          {(stepsMax>1)&&
            <>
              <button
                type="button"
                disabled={currentStep === 1}
                className={`${
                  currentStep === 1 ? "brightness-[70%]" : ""
                } bg-myGray text-[#fff] rounded-[.5rem] px-[.5rem]`}
                onClick={() =>
                  setValues((prev: any) => switching(prev, 1, "stepsMinus"))
                }
              >
                <FontAwesomeIcon size="xl" icon={faAnglesLeft} />
              </button>
              {!(currentStep === stepsMax) && (
                <MyButton
                  type="button"
                  onClick={() =>
                    setValues((prev: any) =>
                      switching(prev, stepsMax, "addition")
                    )
                  }
                >
                  siguiente
                </MyButton>
              )}
            </>
          }
          {currentStep === stepsMax &&oneMore&&(
            <MyButton type="submit">crear uno mas</MyButton>
          )}
        </div>
        {path && (
          <MyLink href={path} cancel>
            cancel
          </MyLink>
        )}
        {!path && (
          <MyButton type="button" cancel onClick={() => router.back()}>
            cancel
          </MyButton>
        )}
        <MyButton finish onClick={() => setIsBack(true)}>
          Finalizar
        </MyButton>
      </div>
    </form>
  );
}

function switching(prev:any,stepsMaxstepsMin:number,operation:'stepsMinus'|'addition')
{

  function operatting()
  {
    if(operation==='stepsMinus')return prevStep-1
    if(operation==='addition')return prevStep+1
  }

  const prevStep = prev.step

  const step = prevStep===stepsMaxstepsMin ? stepsMaxstepsMin: operatting()

  return {...prev,step}
}
