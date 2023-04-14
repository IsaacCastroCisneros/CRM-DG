import React from "react"
import pagosNewFormContextValues from '@/interfaces/pagosNewFormContextValues';

export const pagosNewFormContext = React.createContext<pagosNewFormContextValues>({isOk:false,setIsOk:()=>null})