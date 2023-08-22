"use client"

import React, { useContext, useEffect,useState } from 'react'
import fullSession from '../../interfaces/fullSession'
import { usePathname } from 'next/navigation'
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable'
import session from '../../interfaces/session'
import Session from './components/Session/SessionList'
import { DndContext, closestCenter } from '@dnd-kit/core'
import appContext from '@/context/appContext'
import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import Option from '@/components/Option/Option'

interface props
{
  current:fullSession
}

export default function FullSession({current}:props)
{
  const{title,id}=current
  const path =usePathname()||''
  const{sessions}=current
  const[sesiones,setSesion]=useState<Array<session>>(sessions)
  const{setShowPopup}=useContext(appContext)

  useEffect(()=>
  {
    setSesion(sesiones)
  },[])

  function handleDragEnd(e:any)
  {
    const{active,over}=e

    if (!active.id !== over.id) 
    {

      setSesion((prev) => 
      {
        const oldIndex = prev.findIndex((person) => person.id === active.id);
        const newIndex = prev.findIndex((person) => person.id === over.id);
   
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  }


  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <div className="flex flex-col items-end gap-[1rem]">
        <div className="flex w-[100%] my-shadow px-[1rem] py-[.7rem] text-[1.2rem] rounded-[.5rem] font-bold justify-between">
          {title}
          <div className="flex items-center gap-[.5rem]">
            <Option
              label="Eliminar Cabecera"
              type="delete"
              onClick={() =>
                setShowPopup({
                  show: true,
                  popup: (
                    <RegularPopup
                      content={<DeleteAlert subject={`Cabecera ${title}`} />}
                      title="eliminar Cabecera"
                    />
                  ),
                })
              }
            />
            <Option label="Editar Cabecera" href={`edit`} type="edit" />
            <Option label="Nueva Cabecera" href={`new`} type="add" />
          </div>
        </div>
        <ul className="flex flex-col max-w-[25rem] gap-[.5rem]">
          <SortableContext
            items={sesiones}
            strategy={verticalListSortingStrategy}
          >
            {sesiones.map((session, pos) => (
              <Session key={pos} {...session} />
            ))}
          </SortableContext>
        </ul>
      </div>
    </DndContext>
  );
}

