"use client"

import React, { useContext } from 'react'
import { CustomSelector } from '@/components/CustomSelector/CustomSelector'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import { context } from '../Form';

export const Respon = () => 
{
  const{program,updateProgram}= useContext(context)

  return (
    <>
      <MyFlexContainer>
        <CustomSelector name="responsablesMarketing" items={program.responsablesMarketing} updateProgram={(items)=>updateProgram({...program,responsablesMarketing:items})} />
        <CustomSelector name="responsables asesoria" items={program.responsablesAsesoria} updateProgram={(items)=>updateProgram({...program,responsablesAsesoria:items})} />
      </MyFlexContainer>
    </>
  );
}
