import React, { Dispatch, SetStateAction } from 'react'
import fullSession from '../../../../interfaces/fullSession';
import {v4 as uuid} from 'uuid'
import dragStatus from '../../interfaces/dragStatus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

interface props 
{
  current:fullSession
  setDragStatus:Dispatch<SetStateAction<dragStatus>>
  dragStatus:dragStatus
}

function List({current,setDragStatus,dragStatus}:props) 
{
  console.log('holaa')

  return (
    <ul className="flex flex-col max-w-[25rem] gap-[.5rem]">
      {current.sessions.map((s) => (
        <li
          key={uuid()}
          draggable
          onDragStart={()=>setDragStatus(prev=>{return{...prev,current:'f'}})}
          className={`px-[1rem] my-shadow py-[.7rem] font-bold gap-[1rem] flex hover:cursor-grab`}
        >
          <FontAwesomeIcon icon={faPlayCircle} size="xl" />
          <strong>{s.title}</strong>
        </li>
      ))}
    </ul>
  );
}

export const SessionList = React.memo(List);