"use client"
import appContext from '@/context/appContext'
import React, { ReactNode, useContext } from 'react'

interface props
{
  children:ReactNode
  label:string
  submit:()=>Promise<any>
  fragment?:ReactNode
}

export const MyForm = (props:props) => 
{
  const
  {
    children,
    label,
    submit,
    fragment
  }=props

  const{setShowPopup,setShowNoti}=useContext(appContext)

  return (
    <form 
      onSubmit={async(e)=>
        {
          e.preventDefault();
          await submit()
          setShowPopup(prev=>{return{...prev,show:false}})
          setShowNoti({show:true,type:'success'})
        }}
      >
      {
        children
      }
      {
        fragment
      }
      <button className='block px-[1rem] py-[.8rem] bg-primary outline-none focus:shadow-2xl text-[#fff] font-bold mt-[1rem] w-[100%]'>
        {
        label
        }
      </button>
    </form>
  )
}
