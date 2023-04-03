import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MyButton({
    label,
    type = "actualizar",
    setShow,
    show,
    icon
  }: {
    label: string;
    type?: "actualizar" | "detalles";
    icon:IconProp,
    show:'actualizar'|'detalles'
    setShow: React.Dispatch<React.SetStateAction<"actualizar" | "detalles">>;
  }) {
  
    const isSelected = show===type
    return (
      <button
        className={`flex items-center gap-[.5rem] px-[2rem] py-[.5rem] ${isSelected?'opacity-1 bg-primary shadow-2xl pointer-events-none':'opacity-[.8] bg-[#97B1F7]'} transition-all duration-200 hover:bg-primary`}
        onClick={() => setShow(type)}
      >
        <FontAwesomeIcon  icon={icon} />
        {label}
      </button>
    );
  }
