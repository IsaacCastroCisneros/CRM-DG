import React from "react"
import appContextValues from "@/interfaces/appContextValues"

const appContext=React.createContext<appContextValues>(
    {
       showPopup:{show:false,popup:<></>},
       setShowPopup:()=>null
    }
  )

export default appContext