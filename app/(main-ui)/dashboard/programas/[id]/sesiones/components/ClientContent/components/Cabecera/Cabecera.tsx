"use client"

import React, { Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import Session from '../Session'
import appContext from '@/context/appContext'
import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import Option from '@/components/Option/Option'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGripVertical, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { SortableContext, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import session from '../../interfaces/session'
import CreateTitulo from '../CreateTitulo'
import cabecera from '../../interfaces/cabecera'
import MyButton from '@/app/(main-ui)/dashboard/pagos/detalle/[id]/components/EditForm/components/MyButton/MyButton'
import { MyLink } from '@/components/MyLink/MyLink'

interface props
{
  sessions:Array<session>
  cabecera:cabecera
}

export default function Cabecera({sessions,cabecera}:props)
{
  const{title,id,idDragAndDrop}=cabecera
  const path =usePathname()||''
  const{setShowPopup}=useContext(appContext)

  const items = useMemo(()=>sessions.map(session=>session.idDragAndDrop),[sessions])


  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id:idDragAndDrop,
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
      className={`flex flex-col items-end gap-[1rem] h-[32rem] w-[325px] bg-white my-shadow ${
        isDragging
          ? "border-[3px] border-primary opacity-[.5] overflow-hidden rounded-[.5rem]"
          : ""
      }`}
    >
      <div className="flex w-[100%] px-[1rem] py-[.7rem] text-[1.2rem] rounded-[.5rem] font-bold justify-between bg-white">
        <div className="flex gap-[1rem] items-center">
          <div className="hover:cursor-grab" {...attributes} {...listeners}>
            <FontAwesomeIcon icon={faGripVertical} />
          </div>
          <span className="text-[1rem]">{title}</span>
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
                popup: (
                  <RegularPopup
                    title="Editar Cabecera"
                    content={<CreateTitulo title={title} />}
                  />
                ),
              })
            }
          />
        </div>
      </div>
      <div className='px-[1rem] py-[1.3rem] flex-1 w-[100%] flex flex-col justify-between'>
        <ul className={`flex flex-col max-w-[25rem] gap-[.5rem]`}>
          <SortableContext items={items}>
            {sessions.map((session, pos) => (
              <Session key={pos} {...session} />
            ))}
          </SortableContext>
        </ul>
      <MyLink className='w-[100%]'  href={`${path}/new`} icon={faPlusCircle}>
         Añadir Sesion
      </MyLink>
      </div>
    </div>
  );
}

