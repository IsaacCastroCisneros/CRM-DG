"use client"

import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import session from '../../../../interfaces/session';
import Option from '@/components/Option/Option';
import appContext from '@/context/appContext';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import DeleteAlert from '@/components/DeleteAlert/DeleteAlert';


export default function Session({title,id}:session) 
{
  const{attributes,listeners,setNodeRef,transform,transition}=useSortable(
    {
       id,
       animateLayoutChanges:()=>false
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
      {...attributes}
      {...listeners}
      className={`px-[1rem] my-shadow py-[.7rem] font-bold gap-[1rem] flex hover:cursor-grab bg-white z-50 relative`}
    >
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
      <strong>{title}</strong>
    </li>
  );
}
