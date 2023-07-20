import appContext from '@/context/appContext'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactNode, useContext } from 'react'
interface props
{
  content:ReactNode
  title:string
}

export default function RegularPopup({content,title}:props) 
{
  const{setShowPopup}=useContext(appContext) 

  return (
    <div className='min-w-[50rem]'>
      <div className="py-[8px] px-[32px] bg-primary relative text-white w-[100%]">
        <strong className='capitalize'>
            {title}
        </strong>
        <button
          className="absolute right-[2rem] top-[50%] translate-y-[-50%]"
          onClick={() =>
            {
              setShowPopup((prev) => {
                return { ...prev, show: false };
              })
            }
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
