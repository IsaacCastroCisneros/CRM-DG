"use client"

import React, { Dispatch, ReactNode, SetStateAction, useContext } from 'react'
import { MyButton } from '@/components/MyButton/MyButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { MyLink } from '@/components/MyLink/MyLink'
import { useRouter } from 'next/navigation'
import appContext from '@/context/appContext'
import { ok } from 'assert'

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
  isBack?:boolean
  isValid?:boolean|null
  defaultValues?:Record<any,any>
  isPopup?:boolean
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
    isBack=false,
    isValid=null,
    isPopup=false,
    defaultValues={}
  }=props

  const router = useRouter()
  const{setShowNoti,setShowPopup}=useContext(appContext)

  const currentStep= values.step||1

  const noYet= isValid===null?false:!isValid

  return (
    <form
      onSubmit={async (e) => 
      { 
        if(noYet)return
        e.preventDefault();
        await submit();
        setShowNoti({ show: true, type: "success" });

        if (!isBack) 
        {
          setValues(defaultValues);
        }
        if(isPopup)
        {
           setShowPopup(prev=>{return{...prev,show:false}})
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
            <MyButton type="submit" disabled={noYet}>crear uno mas</MyButton>
          )}
        </div>
        {path &&!isPopup&&(
          <MyLink href={path} cancel>
            cancel
          </MyLink>
        )}
        {!path &&!isPopup&&(
          <MyButton type="button" cancel onClick={() => router.back()}>
            cancel
          </MyButton>
        )}
        <MyButton disabled={noYet} finish>
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
