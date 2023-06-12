import React from 'react'

interface props
{  
   label?:string,
   options?:Array<string>
   onChange?:(e:any)=>void,
   children?:React.ReactNode
   fieldProps?:any
}

export default function MyNormalSelect(props:props) 
{
  const
  {
    label,
    children,
  }=props

  return (
    <div className="flex flex-col relative flex-1">
      {label && (
        <label className=" text-slate-500 uppercase whitespace-nowrap overflow-hidden text-ellipsis">
          {label}
        </label>
      )}
      {children && <>{children}</>}
    </div>
  );
}
