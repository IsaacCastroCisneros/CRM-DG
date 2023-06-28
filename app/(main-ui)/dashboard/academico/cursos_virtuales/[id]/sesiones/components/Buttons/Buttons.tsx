"use client"

import React, { useContext } from 'react'
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import { FormSession } from '../FormSession';
import { SessionArchivos } from './components/SessionArchivos';

export const Buttons = () => 
{
  const{setShowPopup}=useContext(appContext)

  return (
    <div className="flex mb-[2rem] gap-[1rem]">
      <MyButtonLink
        label="Añadir Seseion"
        icon={faPlusCircle}
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup title="Nueva Sesion" content={<FormSession />} />
            ),
          })
        }
      />
      <MyButtonLink
        label="Archivos"
        icon={faFile}
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup title="Archivos" content={<SessionArchivos />} />
            ),
          })
        }
      />
    </div>
  );
}
