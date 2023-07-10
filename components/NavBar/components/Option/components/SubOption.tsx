import subOption from '@/components/NavBar/interfaces/subOption'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

interface props extends subOption
{
  setShow:Dispatch<SetStateAction<boolean>>
}

export const SubOption = (props:props) => 
{
  const{setShow,label,href}=props

  return (
    <Link href={href} className='' onClick={()=>setShow(false)} >
       {
         label
       }
    </Link>
  )
}
