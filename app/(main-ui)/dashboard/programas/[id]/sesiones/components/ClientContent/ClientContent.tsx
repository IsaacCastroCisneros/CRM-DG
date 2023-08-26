"use client"
import React, { useContext, useMemo, useState } from 'react'
import { MyButton } from '@/components/MyButton/MyButton';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import CreateTitulo from './components/CreateTitulo';
import fullSession from './interfaces/cabecera';
import { DndContext,DragEndEvent,DragOverEvent,DragOverlay,DragStartEvent,PointerSensor,closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext ,arrayMove,verticalListSortingStrategy} from '@dnd-kit/sortable';
import { createPortal } from 'react-dom';
import session from './interfaces/session';
import sessionWithIdDeCabecera from './interfaces/sessionWithIdDeCabecera';
import Session from './components/Session';
import cabecera from './interfaces/cabecera';
import Cabecera from './components/Cabecera/Cabecera';
import {v4 as uuid} from 'uuid'

const defaultCabeceras:Array<cabecera> = 
[
  {
    id:"si" ,
    idDragAndDrop:"1",
    title: "SESIONES CABECERA",
  },
  {
    id: "no",
    idDragAndDrop:"2",
    title: "SESIONES CABECERA 2",
  },
  {
    id: "2",
    idDragAndDrop:"3",
    title: "SESIONES CABECERA",
  },
  {
    id: "3",
    idDragAndDrop:"4",
    title: "SESIONES CABECERA 2",
  },
  {
    id: "4",
    idDragAndDrop:"5",
    title: "SESIONES CABECERA",
  },
  {
    id: "5",
    idDragAndDrop:"6",
    title: "SESIONES CABECERA 2",
  },
];

const defaultSessions:Array<sessionWithIdDeCabecera> =  
[
  {
    title: "SESION4",
    id:'1',
    idCabecera:"si",
    idDragAndDrop:"1",
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
    idDragAndDrop:"3",
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
    idDragAndDrop:"3",
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
    idDragAndDrop:"4",
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
    idDragAndDrop:"5",
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
    idDragAndDrop:"6",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'7',
    idCabecera:"no",
    content: "",
    idDragAndDrop:"7",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'8',
    idCabecera:"2",
    content: "",
    idDragAndDrop:"8",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'9',
    idCabecera:"no",
    idDragAndDrop:"9",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'10',
    idCabecera:"2",
    idDragAndDrop:"10",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'11',
    idCabecera:"si",
    content: "",
    date: "",
    idDragAndDrop:"11",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'12',
    idCabecera:"3",
    content: "",
    idDragAndDrop:"12",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'13',
    idCabecera:"3",
    idDragAndDrop:"13",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'14',
    idCabecera:"3",
    idDragAndDrop:"14",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'15',
    idCabecera:"2",
    idDragAndDrop:"15",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'16',
    idCabecera:"4",
    content: "",
    idDragAndDrop:"16",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'17',
    idCabecera:"3",
    idDragAndDrop:"17",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'18',
    idCabecera:"4",
    idDragAndDrop:"18",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'19',
    idCabecera:"4",
    idDragAndDrop:"19",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'20',
    idCabecera:"2",
    idDragAndDrop:"20",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'21',
    idCabecera:"5",
    idDragAndDrop:"21",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'22',
    idCabecera:"5",
    idDragAndDrop:"22",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
  {
    title: "SESION9",
    id:'23',
    idCabecera:"5",
    idDragAndDrop:"23",
    content: "",
    date: "",
    horaInicio: "",
    horaTermino: "",
    tipoDeTransmision: "",
  },
]

export default function ClientContent() 
{
  const[cabeceras,setFullSessions]=useState<Array<cabecera>>(defaultCabeceras)
  const[sessions,setSessions]=useState<Array<sessionWithIdDeCabecera>>(defaultSessions)
  const[activeColumn,setActiveColumn]=useState<cabecera|null>(null)
  const[activeSession,setActiveSession]=useState<session|null>(null)
  const{setShowPopup}=useContext(appContext)

  const items= useMemo(()=>cabeceras.map(cabecera=>cabecera.idDragAndDrop),[cabeceras])

  console.log(uuid())

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 3,
      },
    })
  );


  function onDragStartHandle(e:DragStartEvent)
  {
   /*  const column = e.active.data.current
    
    if(column?.type==="column")
    {
      setActiveColumn(column.column)
    }
    if(column?.type==="session")
    {
       setActiveSession(column.session)
     } */
  }

  function onDragEndHandle(e:DragEndEvent)
  {
   /*  setActiveColumn(null);
    setActiveSession(null); */
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
        return arrayMove(sessions, activeIndex, activeIndex);
      });
    }
  }
  

  return (
    <>
     <div className='flex flex-wrap gap-[1rem]'>
      <DndContext
        onDragStart={onDragStartHandle}
        onDragOver={onDragOverHandle}
        sensors={sensors}
        onDragEnd={onDragEndHandle}
      >
        <SortableContext items={items} >
          {cabeceras.map((s, pos) => (
            <Cabecera key={pos} sessions={filterSessions(s)} cabecera={s}  />
          ))}
        </SortableContext>
{/*         {createPortal(
          <DragOverlay>
            {activeColumn && <Cabecera cabecera={activeColumn} sessions={filterSessions(activeColumn)}  showAll={showAll} />}
            {
              activeSession&&<Session {...activeSession}/>
            }
          </DragOverlay>,
          document.body
        )} */}
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




