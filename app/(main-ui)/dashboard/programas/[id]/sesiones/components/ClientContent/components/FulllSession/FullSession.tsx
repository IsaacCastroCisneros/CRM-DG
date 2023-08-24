"use client"

import React, { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'
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
import CreateTitulo from '../CreateTitulo'
import fullSessionWithShow from '../../interfaces/fullSessionWithShow'

interface props
{
  sessions:Array<session>
  cabecera:fullSessionWithShow
  showAll:boolean
}

export default function FullSession({sessions,cabecera,showAll}:props)
{
  const{title,id,show}=cabecera
  const path =usePathname()||''
  const{setShowPopup}=useContext(appContext)
  const[showSessions,setShowSessions]=useState<boolean>(true)

  const items = useMemo(()=>sessions.map(session=>session.id),[sessions])


  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    animateLayoutChanges:()=>false,
    data: {
      type: "column",
      column: cabecera,
      id
    },
  });

    const style=
    {
      transform:CSS.Transform.toString(transform),
      transition
    }

  const isShowSessions= showAll ? false : showSessions

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
          <Option
            label="Editar Cabecera"
            type="edit"
            onClick={() =>
              setShowPopup({
                show: true,
                popup: <RegularPopup title="Editar Cabecera" content={<CreateTitulo title={title} />} />,
              })
            }
          />
          <Option label="Nueva Sesion" href={`new`} type="add" />
          <button
            onClick={() =>setShowSessions(prev=>!prev)}
            className="ml-[2rem]"
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </button>
        </div>
      </div>
      {isShowSessions&&(
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

