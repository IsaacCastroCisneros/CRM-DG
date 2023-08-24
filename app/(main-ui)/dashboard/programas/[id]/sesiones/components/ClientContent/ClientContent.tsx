"use client"
import React, { useContext, useMemo, useState } from 'react'
import { MyButton } from '@/components/MyButton/MyButton';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import CreateTitulo from './components/CreateTitulo';
import fullSession from './interfaces/fullSession';
import FullSession from './components/FulllSession/FullSession';
import { DndContext,DragEndEvent,DragOverEvent,DragOverlay,DragStartEvent,PointerSensor,closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext ,arrayMove,verticalListSortingStrategy} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import session from './interfaces/session';
import sessionWithIdDeCabecera from './interfaces/sessionWithIdDeCabecera';
import Session from './components/Session';

const cabeceras:Array<fullSession> = [
  {
    id: "si",
    title: "SESIONES CABECERA",
  },
  {
    id: "no",
    title: "SESIONES CABECERA 2",
  },
];

const defaultSessions:Array<sessionWithIdDeCabecera> =  
[
  {
    title: "SESION4",
    id:'1',
    idCabecera:"si",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION5",
    id:'2',
    idCabecera:"si",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION6",
    id:'3',
    idCabecera:"si",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION7",
    id:'4',
    idCabecera:"no",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION8",
    id:'5',
    idCabecera:"no",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'6',
    idCabecera:"no",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
]

export default function ClientContent() 
{
  const[fullSessions,setFullSessions]=useState<Array<fullSession>>(cabeceras)
  const[sessions,setSessions]=useState<Array<sessionWithIdDeCabecera>>(defaultSessions)
  const[activeColumn,setActiveColumn]=useState<fullSession|null>(null)
  const[activeSession,setActiveSession]=useState<session|null>(null)
  const[draggin,setDraggin]=useState<boolean>(false)
  const{setShowPopup}=useContext(appContext)

  const items= useMemo(()=>fullSessions.map(fullSession=>fullSession.id),[fullSessions])

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
      setDraggin(true)
      setActiveColumn(column.column)
    }
    if(column?.type==="session")
    {
       setDraggin(false)
       setActiveSession(column.session)
     }
  }

  function onDragEndHandle(e:DragEndEvent)
  {
    setActiveColumn(null);
    setActiveSession(null);
    setDraggin(false)
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

  function filterSessions(cabecera:fullSession):Array<session>
  {
    return  sessions.filter(session=>session.idCabecera===cabecera.id)
  }

  function onDragOverHandle(e:DragOverEvent)
  {
    const { active, over } = e;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveASession = active.data.current?.type === "session";
    const isOverASession = over.data.current?.type === "session";

    if (!isActiveASession) return;

    if (isActiveASession && isOverASession) 
    {
      setSessions((sessions) => 
      {
        const activeIndex = sessions.findIndex((t) => t.id === activeId);
        const overIndex = sessions.findIndex((t) => t.id === overId);

        if (sessions[activeIndex].idCabecera != sessions[overIndex].idCabecera) {
          sessions[activeIndex].idCabecera = sessions[overIndex].idCabecera;
          return arrayMove(sessions, activeIndex, overIndex - 1);
        }

        return arrayMove(sessions, activeIndex, overIndex);
      });
    }

    const isOverAColumn = over.data.current?.type === "column";

    if (isActiveASession && isOverAColumn) {
      setSessions((sessions) => {
        const activeIndex = sessions.findIndex((t) => t.id === activeId);

        sessions[activeIndex].idCabecera = `${overId}`;
        console.log("DROPPING TASK OVER COLUMN", { activeIndex });
        return arrayMove(sessions, activeIndex, activeIndex);
      });
    }
  }
  

  return (
    <>
     <div className='flex flex-col gap-[.6rem] mb-[1rem]'>
      <DndContext
        onDragStart={onDragStartHandle}
        onDragOver={onDragOverHandle}
        sensors={sensors}
        onDragEnd={onDragEndHandle}
      >
        <SortableContext items={items} >
          {fullSessions.map((s, pos) => (
            <FullSession key={pos} sessions={filterSessions(s)} cabecera={s} draggin={draggin} />
          ))}
        </SortableContext>
        {createPortal(
          <DragOverlay>
            {activeColumn && <FullSession cabecera={activeColumn} sessions={filterSessions(activeColumn)} draggin={draggin} />}
            {
              activeSession&&<Session {...activeSession}/>
            }
          </DragOverlay>,
          document.body
        )}
      </DndContext>
     </div>
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




