"use client"

import React, { useContext, useMemo, useState } from 'react'
import fullSession from '../../interfaces/fullSession'
import { usePathname } from 'next/navigation'
import Session from '../Session'
import appContext from '@/context/appContext'
import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import Option from '@/components/Option/Option'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import session from '../../interfaces/session'

interface props
{
  sessions:Array<session>
  cabecera:fullSession
  draggin:boolean
}

export default function FullSession({sessions,cabecera,draggin}:props)
{
  const{title,id}=cabecera
  const path =usePathname()||''
  const{setShowPopup}=useContext(appContext)
  const[showSessions,setShowSessions]=useState<boolean>(false)

  const items = useMemo(()=>sessions.map(session=>session.id),[sessions])

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
      column: cabecera,
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
      className={`flex flex-col items-end gap-[1rem] ${
        isDragging
          ? "border-[3px] border-primary opacity-[.5] overflow-hidden rounded-[.5rem]"
          : ""
      }`}
    >
      <div className="flex w-[100%] my-shadow px-[1rem] py-[.7rem] text-[1.2rem] rounded-[.5rem] font-bold justify-between bg-white">
        <div className="flex gap-[1rem]">
          <div className="hover:cursor-grab" {...attributes} {...listeners}>
            <FontAwesomeIcon icon={faGripVertical} />
          </div>
          {title}
        </div>
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
          <button onClick={() => setShowSessions(prev=>!prev)} className='ml-[2rem]'>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      {(!draggin&&showSessions) && (
        <ul className="flex flex-col max-w-[25rem] gap-[.5rem]">
          <SortableContext items={items}>
            {sessions.map((session, pos) => (
              <Session key={pos} {...session} />
            ))}
          </SortableContext>
        </ul>
      )}
    </div>
  );
}

