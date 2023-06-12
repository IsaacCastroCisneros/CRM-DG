'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Dispatch,SetStateAction,useRef, useState } from 'react';
import { HoverMenu } from './HoverMenu';
import optionNav from '@/interfaces/optionNav';
interface props extends optionNav
{
  isHome?:boolean;
  id:number;
  show:{show:boolean,isSelected:number,pipeBar:string|undefined};
  setShow:Dispatch<SetStateAction<{ show: boolean; isSelected: number;pipeBar:any}>>;
}

const NavbarOption=(props:props)=>
{  
  const
  {
    label,
    icon,
    show,
    setShow,
    id,
    href,
    submenu
  }=props
   
  const[isHover,setIsHover]=useState(false)

   return (
     <li
       className={`transition-all duration-200 pb-[1.5rem] relative`}
       onMouseEnter={()=>setIsHover(true)}
       onMouseLeave={()=>setIsHover(false)}
     >
       <HoverMenu isHover={isHover} submenu={submenu||[]} title={label}/>
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
             show.pipeBar===label||isHover ? "block" : "hidden" 
             }`}
           ></div>
           <div className="w-[5rem] mob:w-[3rem] flex justify-center">
             <FontAwesomeIcon className='text-[30px] mob:text-[18.75px]' icon={icon}/>
           </div>
         </Link>
     </li>
   );
}



export default NavbarOption