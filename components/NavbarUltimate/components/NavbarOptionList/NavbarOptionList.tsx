'use client'

import React,{useState} from 'react'
import NavbarOption from './components/NavbarOption';

import { usePathname } from 'next/navigation';
import optionList from './helpers/optionList';

const NavbarOptionList=()=> 
{
  const path = usePathname()
  const[show,setShow]=useState({show:false,isSelected:0,pipeBar:path==='/dashboard'?'dashboard':path?.split('/')[2]})

  return (
    <>
      {
        optionList.map((opt,pos)=>
          {
            return (
              <NavbarOption
                key={pos}
                id={pos}
                show={show}
                setShow={setShow}
                {...opt}
              />
            );
          })
      }
    </>
  );
}

export default NavbarOptionList