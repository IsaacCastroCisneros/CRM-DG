import React from "react"
import appContextValues from "@/interfaces/appContextValues"

const appContext=React.createContext<appContextValues>(
    {
       showPopup:{show:false,popup:<></>},
       setShowPopup:()=>null,
       showNoti:{show:false,type:'success'},
       setShowNoti:()=>null,
       showSideMenu:{show:false,content:<></>},
       setShowSideMenu:()=>null
    }
  )

export default appContext