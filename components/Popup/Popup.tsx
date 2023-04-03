import popup from '@/interfaces/popup';
import React, { ReactElement} from 'react'

interface props
{
  show:boolean,
  setShowPopup:React.Dispatch<React.SetStateAction<popup>>,
  popup:ReactElement<Element>
}

export default function Popup({show=false,setShowPopup,popup}:props) 
{

  return (
    <div className="fixed z-[9999] w-[100%] h-[100%] pointer-events-none">
      <div
        className="w-[100%] h-[100%] bg-[#000] transition-all duration-200 absolute top-0"
        style={{
          opacity: show ? ".8" : "0",
          pointerEvents: show ? "auto" : "none",
        }}
        
      ></div>
      <div className="container-popup flex justify-center items-center w-[100%] h-[100%] abosulte z-[99999] top-0 transition-all duration-200 px-[2rem]"
        style={
          {
            transform:show?'scale(1)':'scale(0)',
            pointerEvents:show?'auto':'none'
          }
         }
         onClick={(e:any)=>
          {
            if(!e.target.matches('.container-popup'))return
            setShowPopup(prev=>{return {...prev,show:false}})
          }
        }
       >
        {
          popup
        }
      </div>
    </div>
  );
}
