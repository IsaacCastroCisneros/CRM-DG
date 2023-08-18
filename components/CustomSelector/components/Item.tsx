import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import item from '../interfaces/item';

interface props extends item
{
    handleDeletingItem:(id:string)=>void
}

export default function Item({label,id,handleDeletingItem}:props)
{
  return (
    <span className="px-[1rem] py-[.4rem] rounded-[2rem] bg-[#f0f2f0] font-semibold inline-flex items-center gap-[.5rem]">
      <button
       type='button'
       onClick={()=>handleDeletingItem(id)}
       >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      {
        label
      }
    </span>
  );
}
