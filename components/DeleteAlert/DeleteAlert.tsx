import {MyButton} from '@/components/MyButton/MyButton'
import appContext from '@/context/appContext'
import React,{useContext} from 'react'

export default function DeleteAlert({subject,fullLine}:{subject?:string,fullLine?:string}) 
{
    const{setShowPopup}=useContext(appContext)

    return(
        <>
          <strong className='block text-center text-[1.5rem] mb-[1rem]'>
             {fullLine&&<>{fullLine}</>} 
             {!fullLine&&<>{`¿Estas seguro de elimar ${subject}?`}</>}
          </strong>
          <div className='flex w-[100%] justify-center gap-[1rem]'>
            <MyButton>SI</MyButton>
            <button className='hover:underline hover:text-primary text-myText'
             onClick={()=>setShowPopup(prev=>{return{...prev,show:false}})}
             >
                Regresar
            </button>
          </div>
        </>
    )
}
