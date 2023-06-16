import popup from '@/interfaces/popup';
import React, {ReactNode} from 'react'

interface props
{
  show:boolean,
  setShowPopup:React.Dispatch<React.SetStateAction<popup>>,
  popup:ReactNode
}

export default function Popup({show=false,setShowPopup,popup}:props) 
{

  return (
    <>
      {show && (
        <div className="fixed z-[1299] w-[100%] h-[100%] left-0 top-0">
          <div
            className="w-[100%] h-[100%] bg-[#000] transition-all duration-200 absolute top-0 opacity-[.8]"
            onClick={()=>setShowPopup(prev=>{return{...prev,show:false}})}
          ></div>
          <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'>
            {
              popup
            }
          </div>
        </div>
      )}
    </>
  );
}
