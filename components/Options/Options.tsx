import { appContext } from '@/context/AppContenxt'
import React,{ReactElement, useContext} from 'react'

export default function Options({children}:{children:ReactElement})
{
  const{setShowPopup}=useContext(appContext)

  return(
    <div className='flex max-w-[100%] flex-wrap gap-[.5rem] justify-center'>
      {
        children
      }
    </div>
  )
}
