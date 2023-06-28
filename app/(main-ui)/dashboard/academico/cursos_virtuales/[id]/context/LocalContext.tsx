"use client"

import React, { ReactNode } from 'react'

const localContext = React.createContext<values>({program:{title:'',id:""}})

interface values
{
  program:program
}

interface program
{
  title:string,
  id:string
}

export default function LocalContext({children,program}:{children:ReactNode,program:program}) 
{
  const values=
  {
    program
  }

  return (
    <localContext.Provider value={values}>
      {
        children
      }
    </localContext.Provider>
  )
}
