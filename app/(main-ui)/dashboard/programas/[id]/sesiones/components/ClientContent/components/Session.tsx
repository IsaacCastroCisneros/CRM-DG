"use client"

import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import session from '../interfaces/session';
import Option from '@/components/Option/Option';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import DeleteAlert from '@/components/DeleteAlert/DeleteAlert';
import { twMerge } from 'tailwind-merge';


export default function Session(props:session) 
{
  const{title,id}=props

  const{attributes,listeners,setNodeRef,isDragging,transform,transition}=useSortable(
    {
       id,
       animateLayoutChanges:()=>false,
       data:
       {
         type:"session",
         session:props
       }
    })
  const{setShowPopup}=useContext(appContext)

  const style=
  {
    transform:CSS.Transform.toString(transform),
    transition
  }

  return (
    <li
      style={style}
      ref={setNodeRef} 
      className={twMerge(`px-[1rem] py-[.7rem] font-bold gap-[1rem] flex rounded-[.5rem] bg-white z-50 relative border-[3px] border-[transparent]`,`${isDragging?' border-primary opacity-[.5]':''}`) }
    >
      <div className='hover:cursor-grab'
       {...attributes}
       {...listeners}
       >
        <FontAwesomeIcon icon={faGripVertical} />
      </div>
      <FontAwesomeIcon icon={faPlayCircle} size="xl" />
      <Option
        type="delete"
        label="Eliminar Sesion"
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup
                content={<DeleteAlert subject={`Sesion ${title}`} />}
                title="eliminar sesion"
              />
            ),
          })
        }
      />
      <Option type="edit" label='editar sesion' href={`edit/${id}`}  />
      <strong>{title}</strong>
    </li>
  );
}
