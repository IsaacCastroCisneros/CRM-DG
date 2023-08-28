"use client"
import { useContext, useMemo, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import sessionWithIdDeCabecera from "./interfaces/sessionWithIdDeCabecera";
import cabecera from "./interfaces/cabecera";
import { defaultCabeceras, defaultSessions } from "./util/data";
import Cabecera from "./components/Cabecera";
import Sesssion from "./components/Sesssion";
import { MyButton } from "@/components/MyButton/MyButton";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import appContext from "@/context/appContext";
import RegularPopup from "@/components/RegularPopup/RegularPopup";
import CreateTitulo from "./components/CreateTitulo";


function KanbanBoard() 
{
  const [cabeceras, setCabeceras] = useState<Array<cabecera>>(defaultCabeceras);
  const items = useMemo(() => cabeceras.map((cabecera) => cabecera.id), [cabeceras]);
  const [sessions, setSessions] = useState<Array<sessionWithIdDeCabecera>>(defaultSessions);

  const [activeCabecera, setActiveCabecera] = useState<cabecera | null>(null);

  const [activeSession, setActiveSession] = useState<sessionWithIdDeCabecera | null>(null);
  const{setShowPopup}=useContext(appContext)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );


  return (
    <>
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="grid grid-cols-[repeat(auto-fill,minmax(22rem,1fr))] gap-[2rem]">
          <SortableContext items={items}>
            {cabeceras.map((cab) => (
              <Cabecera
                key={cab.id}
                cabecera={cab}
                sessions={sessions.filter((ses) => ses.idCabecera === cab.id)}
              />
            ))}
          </SortableContext>
        </div>
        {createPortal(
          <DragOverlay>
            {activeCabecera && (
              <Cabecera
                cabecera={activeCabecera}
                sessions={sessions.filter(
                  (ses) => ses.idCabecera === activeCabecera.id
                )}
              />
            )}
            {activeSession && <Sesssion {...activeSession} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
      <MyButton
        icon={faPlusCircle}
        className="w-auto fixed bottom-[5rem] left-[5rem] z-[999]"
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


  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "cabecera") {
      setActiveCabecera(event.active.data.current.column);
      return;
    }

    if (event.active.data.current?.type === "session") {
      setActiveSession(event.active.data.current.session);
      return;
    }
  }

  function onDragEnd(event: DragEndEvent) 
  {  
    setActiveCabecera(null);
    setActiveSession(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveACabecera = active.data.current?.type === "cabecera";
    if (!isActiveACabecera) return;

    setCabeceras((cabeceras) => {
      const activeCabecerasIndex = cabeceras.findIndex((cab) => cab.id === activeId);

      const overCabeceraIndex = cabeceras.findIndex((cab) => cab.id === overId);

      return arrayMove(cabeceras,activeCabecerasIndex, overCabeceraIndex);
    });

  }

  function onDragOver(event: DragOverEvent) 
  {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    const isActiveASession = active.data.current?.type === "session";
    const isOverASession = over.data.current?.type === "session";

    if (!isActiveASession) return;

    if (isActiveASession && isOverASession) 
    {
      
      setSessions((sessions) => {
        const activeIndex = sessions.findIndex((ses) => ses.id === activeId);
        const overIndex = sessions.findIndex((ses) => ses.id === overId);

        if (sessions[activeIndex].idCabecera != sessions[overIndex].idCabecera) {
          sessions[activeIndex].idCabecera = sessions[overIndex].idCabecera;
          return arrayMove(sessions, activeIndex, overIndex - 1);
        }

        return arrayMove(sessions, activeIndex, overIndex);
      });
    }

    const isOverACabecera = over.data.current?.type === "cabecera";

  
    if (isActiveASession && isOverACabecera) {
      setSessions((session) => {
        const activeIndex = session.findIndex((t) => t.id === activeId);

        session[activeIndex].idCabecera = `${overId}`;
        return arrayMove(session, activeIndex, activeIndex);
      });
    }
  }
}


export default KanbanBoard;
