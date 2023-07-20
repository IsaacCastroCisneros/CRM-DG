"use client"

import Option from "@/components/Option/Option"
import appContext from "@/context/appContext"
import { useContext } from "react"
import Historial from "./components/Historial/Historial"

export default function ShowingHistory()
{
  const{setShowSideMenu}=useContext(appContext)

  return(
    <Option label="Historial" type="history" onClick={()=>setShowSideMenu(prev=>{return {show:!prev.show,content:<Historial/>}})} />
  )
}