import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

export default function HistorialItem() 
{
  const[show,setShow]=useState<boolean>(false)

  return (
    <div className="border-[1px] border-myBorder rounded-[.5rem] overflow-hidden flex flex-col ">
      <button className="px-[1rem] py-[.8rem] bg-bg flex justify-between items-center text-lg text-myblack font-bold"
        onClick={()=>setShow(!show)}
        >
        Maria Valle <FontAwesomeIcon icon={show ? faChevronUp:faChevronDown} />{" "}
      </button>
      {show && <p className='p-[1rem]'>historial</p>}
    </div>
  );
}
