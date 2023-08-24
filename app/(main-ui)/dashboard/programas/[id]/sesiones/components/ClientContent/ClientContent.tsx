"use client"
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { MyButton } from '@/components/MyButton/MyButton';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import CreateTitulo from './components/CreateTitulo';
import fullSession from './interfaces/fullSession';
import FullSession from './components/FulllSession/FullSession';
import { DndContext,DragEndEvent,DragOverlay,DragStartEvent,PointerSensor,closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext ,arrayMove,verticalListSortingStrategy} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';

const sessions = [
  {
    id: '1',
    title: "SESIONES CABECERA",
    sessions: [
      {
        title: "SESION1",
        id:'8',
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
    id: '7',
    title: "SESIONES CABECERA 2",
    sessions: [
      {
        title: "SESION4",
        id:'44',
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION5",
        id:'56',
        content: "",
        date: "",
        horaInicio: "",
        horaTermino: "",
        tipoDeTransmision: "",
      },
      {
        title: "SESION6",
        id:'67',
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
  const[activeColumn,setActiveColumn]=useState<fullSession|null>(null)
  const{setShowPopup}=useContext(appContext)

  const items= useMemo(()=>fullSessions.map(fullSession=>`${fullSession.id}`),[fullSessions])

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );

  function onDragStartHandle(e:DragStartEvent)
  {
    const column = e.active.data.current
   
     if(column?.type==="column")
     {
       setActiveColumn(column.column)
     }
  }

  function onDragEndHandle(e:DragEndEvent)
  {
    const { active, over } = e;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;
    
    setFullSessions((columns) => {
      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

      const overColumnIndex = columns.findIndex((col) => col.id === overId);

      return arrayMove(columns, activeColumnIndex, overColumnIndex);
    });
  }


  return (
    <>
      <DndContext
        onDragStart={onDragStartHandle}
        sensors={sensors}
        onDragEnd={onDragEndHandle}
      >
        <SortableContext items={items} >
          {fullSessions.map((s, pos) => (
            <FullSession key={pos} current={s} />
          ))}
        </SortableContext>
        {createPortal(
          <DragOverlay>
            {activeColumn && <FullSession current={activeColumn} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <MyButton
        icon={faPlusCircle}
        className="w-auto"
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup title="Crear Cabecera" content={<CreateTitulo />} />
            ),
          })
        }
      >
        Crear Nuevo Titulo
      </MyButton>
    </>
  );
}




