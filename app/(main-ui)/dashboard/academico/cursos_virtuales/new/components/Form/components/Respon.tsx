import React from 'react'
import step from '../../../interfaces/step'
import { CustomSelector } from '@/components/CustomSelector/CustomSelector'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';

export const Respon = ({setValues,values}:step) => 
{
  return (
    <>
      <MyFlexContainer>
        <CustomSelector name="responsablesMarketing" />
        <CustomSelector name="responsablesMarketing" />
      </MyFlexContainer>
    </>
  );
}
