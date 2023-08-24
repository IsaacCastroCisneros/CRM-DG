"use client"

import React, { useContext, useMemo } from 'react'
import fullSession from '../../interfaces/fullSession'
import { usePathname } from 'next/navigation'
import Session from './components/Session/Session'
import appContext from '@/context/appContext'
import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import Option from '@/components/Option/Option'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripLinesVertical, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

interface props
{
  current:fullSession
}

export default function FullSession({current}:props)
{
  const{title,id}=current
  const path =usePathname()||''
  const{sessions}=current
  const{setShowPopup}=useContext(appContext)

  const items = useMemo(()=>current.sessions.map(session=>`${session.id}-session`),[current])

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id,
    animateLayoutChanges:()=>false,
    data: {
      type: "column",
      column: current,
    },
  });

    const style=
    {
      transform:CSS.Transform.toString(transform),
      transition
    }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex flex-col items-end gap-[1rem] rounded-[.5rem] overflow-hidden ${isDragging ? 'border-[3px] border-primary opacity-[.5]':''}`} 
    >
      <div className="flex w-[100%] my-shadow px-[1rem] py-[.7rem] text-[1.2rem]  font-bold justify-between bg-white">
        <div className="hover:cursor-grab" {...attributes} {...listeners}>
          <FontAwesomeIcon icon={faGripVertical} />
        </div>
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
          {sessions.map((session, pos) => (
            <Session key={pos} {...session} />
          ))}
      </ul>
    </div>
  );
}

