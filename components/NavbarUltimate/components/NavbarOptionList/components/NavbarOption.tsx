'use client'

import optionList from '@/components/NavbarUltimate/interfaces/optionList';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Dispatch,SetStateAction,useRef } from 'react';
interface props
{
  label:string;
  icon:IconProp;
  href:string;
  isHome?:boolean;
  id:number;
  show:{show:boolean,isSelected:number,pipeBar:string|undefined};
  setShow:Dispatch<SetStateAction<{ show: boolean; isSelected: number;pipeBar:string|undefined}>>;
  list?:Array<optionList> 
}

export default function NavbarOption(props:props)
{  
  const
  {
    label,
    icon,
    show,
    setShow,
    id,
    href,
    list
  }=props
   
  const container=useRef<HTMLDivElement>(null)


  function getH()
  {
    return container.current ? container.current.offsetHeight : 0
  }


  let isShow = id===show.isSelected

   return (
     <li
       className={`overflow-hidden transition-all duration-200`}
       style={{
         height: `${30 + (show.show && isShow ? getH() : 0)}px`,
       }}
     >
       <div ref={container}>
         <Link
           href={href}
           className="nav-option flex relative items-center text-[15px] font-medium hover:text-myWhite gap-[1.8rem] capitalize"
           onClick={() =>
             setShow((prev) => {
               return {
                 show: prev.isSelected === id ? !prev.show : true,
                 isSelected: id,
                 pipeBar:label
               };
             })
           }
         >
           <div
             className={`bg-myWhite w-[5px] absolute left-0 h-[100%] navbar-pipe ${
             show.pipeBar===label ? "block" : "hidden" 
             }`}
           ></div>
           <div className="w-[5rem] flex justify-center">
             <FontAwesomeIcon size="2xl" icon={icon} />
           </div>
         </Link>
        {/*  {list && (
           <ul className='w-[100%] flex flex-col items-start pl-[5.5rem] mt-[1rem] gap-[.5rem]'>
             {list.map((entry:optionList, pos:number) => {
               return (
                 <li key={pos} className="flex items-center gap-1">
                   <FontAwesomeIcon size='sm' icon={faCheckCircle} />
                   <Link className="text-[13px] max-w-[7rem] text-ellipsis whitespace-nowrap overflow-hidden" href={entry.href}>
                     {entry.label}
                   </Link>
                 </li>
               );
             })}
           </ul>
         )}
         */}
       </div>
     </li>
   );
}
