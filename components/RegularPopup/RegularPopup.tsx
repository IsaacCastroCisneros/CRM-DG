import { appContext } from '@/context/AppContenxt'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode, useContext } from 'react'

export default function RegularPopup({content,title}:{content:ReactNode,title:string}) 
{
  const{setShowPopup}=useContext(appContext) 

  return (
    <div className='w-[50rem] max-w-[100%]'>
      <div className="py-[8px] px-[32px] bg-primary relative text-white w-[100%]">
        <strong>
            {title}
        </strong>
        <button
          className="absolute right-[2rem] top-[50%] translate-y-[-50%]"
          onClick={() =>
            setShowPopup((prev) => {
              return { ...prev, show: false };
            })
          }
        >
          <FontAwesomeIcon size="xl" icon={faXmark} />
        </button>
      </div>
      <section className='pt-[3rem] px-[2.5rem] pb-[1.7rem] text-myBlack bg-white w-[100%] mob2:p-[1rem] overflow-y-auto max-h-[45rem]'>
         {
            content
         }
      </section>
    </div>
  );
}
