import React from 'react'
import values from '../intefaces/values'

const pagosNewFormContext = React.createContext<values>({isOk:false,setIsOk:()=>null})

export default pagosNewFormContext