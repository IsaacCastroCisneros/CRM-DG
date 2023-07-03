"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import { Option } from './components/Option/Option';
import optionList from './helpers/optionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import appContext from '@/context/appContext';
import { useSession } from 'next-auth/react';

export const NavBar = () => 
{
  const{data}=useSession()
  const{user}=data ||{user:{}}

  return (
    <nav className="my-container h-[88px] flex justify-between items-center px-[5rem] bg-[#fff] relative z-[999]">
      <Image src="/img/logo.webp" height={50} width={205} alt="dg-logo" />
      <ul>
        {
          optionList.map((o,pos)=>
          (
            <Option key={pos} {...o} />
          ))
        }
      </ul>
      {
       data&&
       <div>
          <FontAwesomeIcon size='xl' icon={faUser} />
          
       </div>
      }
    </nav>
  );
}
