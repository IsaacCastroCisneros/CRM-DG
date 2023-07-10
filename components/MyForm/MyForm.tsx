"use client"
import appContext from '@/context/appContext'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useContext } from 'react'
import { MyButtonLink } from '../MyButtonLink/MyButtonLink'

interface props
{
  children:ReactNode
  label?:string
  submit:()=>Promise<any>
  fragment?:ReactNode
  path?:string
}

export const MyForm = (props:props) => 
{
  const
  {
    children,
    label,
    submit,
    fragment,
    path
  }=props

  const{setShowPopup,setShowNoti}=useContext(appContext)
  const router = useRouter()

  function handleBack()
  {
    if(path)
    {
      router.push(path)
      return
    }

    setShowPopup((prev) => {
      return { ...prev, show: false };
    });
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        await submit();
        handleBack();
        setShowNoti({ show: true, type: "success" });
      }}
    >
      {children}
      {fragment}
      {label && (
        <div className="flex">
          <button className="flex-1 block px-[1rem] py-[.8rem] bg-primary outline-none focus:shadow-2xl text-[#fff] font-bold mt-[1rem] w-[100%]">
            {label}
          </button>
          <MyButtonLink
            type="thin2"
            label="Cancelar"
            onClick={() => null}
            className="flex-1 text-"
          />
        </div>
      )}
    </form>
  );
}
