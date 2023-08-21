"use client"

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { useSortable} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import session from '../../../../interfaces/session';


export default function Session({title,id}:session) 
{
  const{attributes,listeners,setNodeRef,transform,transition}=useSortable(
    {
       id,
       animateLayoutChanges:()=>false
    })

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
      <strong>{title}</strong>
    </li>
  );
}
