'use client'

import postRequest from '@/helpers/postRequest';
import React, { ReactElement, useEffect, useState } from 'react'
import user from '@/interfaces/user';
import { useRouter } from 'next/navigation';
import appContextValues from '@/interfaces/appContextValues';
import popup from '@/interfaces/popup';

export const appContext=React.createContext<appContextValues>(
  {
     user:
     {
      avatar:'',
      correo:'',
      id:'',
      nombre:'',
      tipo:'',
      token:'',
      isLogin:false
     },
     setUser:()=>null,
     showPopup:{show:false,popup:<></>},
     setShowPopup:()=>null
  }
)

export default function AppContenxt({children}:{children:any}) 
{
  const[user,setUser]=useState<user|undefined>(undefined)
  const[showPopup,setShowPopup]=useState<popup>({show:false,popup:<></>})
  const router = useRouter()

  useEffect(()=>
  {
    const user = localStorage.getItem('myUserCRM')
    if(user===null)return router.push('/login') 
    
    const form = new FormData()
    form.append('token',JSON.parse(user).token)
    
    postRequest(form,'validation')
    .then(res=>
        {
            if(res===false)return router.push('/login')
            setUser(res)
        })
  },[])

  useEffect(()=>
  {
    if(user)
    {
       if(user.isLogin===false)return router.push('/login') 

       localStorage.setItem('myUserCRM',JSON.stringify(user))
       return
    }
  },[user])


  const values:appContextValues = 
  {
    user,
    setUser,
    showPopup,
    setShowPopup
  }

  return (
    <appContext.Provider 
     value=
     {
      values
     }
     >
      {children}
    </appContext.Provider>
  )
}

