"use client"
import React, { useContext, useState } from 'react'
import { MyButton } from '@/components/MyButton/MyButton';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import CreateTitulo from './components/CreateTitulo';
import fullSession from './interfaces/fullSession';
import FullSession from './components/FulllSession/FullSession';

const sessions = [
  {
    id: '1',
    title: "SESIONES CABECERA",
    sessions: [
      {
        title: "SESION1",
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION2",
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION3",
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
    ],
  },
  {
    id: '2',
    title: "SESIONES CABECERA 2",
    sessions: [
      {
        title: "SESION4",
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION5",
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION6",
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
    ],
  },
];


export default function ClientContent() 
{
  const[fullSessions,setFullSessions]=useState<Array<fullSession>>(sessions)
  const{setShowPopup}=useContext(appContext)

  return (
    <>
      {fullSessions.map((s, pos) => (
        <FullSession
          key={pos}
          current={s}
        />
      ))}
      <MyButton
        icon={faPlusCircle}
        className="w-auto"
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup
                title="Crear Cabecera"
                content={<CreateTitulo setFullSessions={setFullSessions} />}
              />
            ),
          })
        }
      >
        Crear Nuevo Titulo
      </MyButton>
    </>
  );
}
