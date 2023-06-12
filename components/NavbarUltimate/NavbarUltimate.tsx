'use client'

import React from 'react'
import NavbarOptionList from './components/NavbarOptionList/NavbarOptionList';

const NavbarUltimate=()=> 
{
  return (
    <nav className="bg-primary fixed text-myWhite h-[100%]">
      <div className="w-[5rem] mob:w-[3rem] px-[1rem] mb-[4.5rem] pt-[44px] desktop:mx-auto">
        <img src="/img/logo-veritcal.png" className="w-[100%]" alt="" />
      </div>
      <ul className="flex w-[100%] flex-col mb-[3rem]">
        <NavbarOptionList/>  
      </ul>
    </nav>
  );
}

export default NavbarUltimate

