
import React from "react"

export default function clicking(e:any,button:string,container:string,setShow:React.Dispatch<React.SetStateAction<boolean>>)
{
  if(e.target.closest(button)===null&&e.target.closest(container)===null)
  {
    setShow(false)
    return
  } 
}