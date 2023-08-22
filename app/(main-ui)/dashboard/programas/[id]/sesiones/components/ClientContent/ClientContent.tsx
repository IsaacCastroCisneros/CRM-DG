"use client"
import React, { useContext, useState } from 'react'
import { MyButton } from '@/components/MyButton/MyButton';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import CreateTitulo from './components/CreateTitulo';
import fullSession from './interfaces/fullSession';
import FullSession from './components/FulllSession/FullSession';
import { DndContext,closestCenter } from '@dnd-kit/core';
import { SortableContext ,verticalListSortingStrategy,useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const sessions = [
  {
    id: '1',
    title: "SESIONES CABECERA",
    sessions: [
      {
        title: "SESION1",
        id:'1',
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION2",
        id:'2',
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION3",
        id:'3',
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
        id:'1',
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION5",
        id:'2',
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION6",
        id:'3',
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

  const items= fullSessions.flatMap(fullSession=>fullSession.sessions)

  return (
      <>
      <SortableContext
       items={items}
       strategy={verticalListSortingStrategy}
       > 
        {fullSessions.map((s, pos) => (
          <FullSession key={pos} current={s} />
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
                  content={<CreateTitulo />}
                />
              ),
            })
          }
        >
          Crear Nuevo Titulo
        </MyButton>
      </SortableContext>
      </>
  );
}




