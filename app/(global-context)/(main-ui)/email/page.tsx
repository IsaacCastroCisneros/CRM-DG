'use client'

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Link from 'next/link';
import HoverMsg from '@/components/HoverMsg/HoverMsg';
import MyBlock from '@/components/MyBlock/MyBlock';

export default function page() 
{
   return (
       <>
         <h1 className="text-[1.4rem] font-bold text-myBlack block mb-[2rem]">
           Mensajes automaticos
         </h1>
         <ul className="flex flex-col gap-[.6rem]">
           <Option label="definitivo" />
           <Option label="cuota" />
           <Option label="boleta" />
           <Option label="factura" />
         </ul>
       </>
   );
    
}

function Option({label}:{label:string})
{
  const[isHover,setIsHover]=useState(false)  

  return (
    <li>
      <Link
        href={"/email/lel"}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative flex shadow-[0px_0px_.3rem_0px_#c2c2c2] px-[.6rem] py-[.5rem] rounded-[.5rem] max-w-[100%] w-[15rem] items-center justify-between hover:text-myBlack transition-all duration-[200ms]"
      >
        <strong className="uppercase">{label}</strong>
        <div className="relative">
          <FontAwesomeIcon icon={faEdit} />
          <HoverMsg
            isHover={isHover}
            label={"Editar"}
            initial={"translate-y-[-60%] opacity-0"}
            active={"translate-y-[-100%] opacity-1"}
            styles={"top-0 translate-x-[-50%] left-[50%]"}
          />
        </div>
      </Link>
    </li>
  );
}
