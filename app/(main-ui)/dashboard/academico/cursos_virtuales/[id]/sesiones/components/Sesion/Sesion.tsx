"use client"

import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import Option from '@/components/Option/Option'
import Options from '@/components/Options/Options'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import appContext from '@/context/appContext'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faClipboard, faFile, faFileLines, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{ReactNode, useContext, useState} from 'react'
import { EditSession } from './components/EditSession'
import { VerArchivos } from './components/VerArchivos'
import { AsignarTarea } from './components/AsignarTarea'

export const Sesion = (props:any) => 
{
  const
  {
    title,
    subtitle,
    fecha,
    hora, 
  }=props

  const[show,setShow]=useState<boolean>(false)
  const{setShowPopup}=useContext(appContext)

  return (
    <div>
      <section className="flex bg-primary text-[#fff] px-[1rem] py-[.8rem] rounded-[.5rem] relative z-[99]">
        <button
          className="font-bold text-[1.3rem] flex-1 text-left flex items-center gap-[2rem]"
          onClick={() => setShow((prev) => !prev)}
        >
          {title}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`${show ? "rotate-180" : ""}`}
          />
          <span className="flex font-medium text-[.9rem]">
            {fecha}&nbsp;|&nbsp;
            {hora}
          </span>
        </button>
        <Options className="px-[1rem] py-[.1rem] bg-slate-700 rounded-[.5rem] border-[1px] border-myBorderDark">
          <Option
            label="eliminar"
            type="delete"
            onClick={() =>
              setShowPopup({
                show: true,
                popup: (
                  <RegularPopup
                    title={`Eliminar ${title}`}
                    content={<DeleteAlert subject={title} />}
                  />
                ),
              })
            }
          />
          <Option
            label="editar"
            type="edit"
            onClick={() =>
              setShowPopup({
                show: true,
                popup: (
                  <RegularPopup
                    title={`Editar ${title}`}
                    content={<EditSession />}
                  />
                ),
              })
            }
          />
        </Options>
      </section>
      {show && (
        <section className="z-[9] translate-y-[-.8rem] rounded-[.5rem] pt-[.8rem] bg-slate-700 text-blue-200">
          <span className="py-[.8rem] px-[1rem] block text-center">
            {subtitle}
          </span>
          <ul>
            <Item
              icon={faFile}
              label="Ver Archivos"
              fragment={<RegularPopup title={`Archivos: ${title}`} content={<VerArchivos />} />}
            />
            <Item
              icon={faClipboard}
              label="Asignar Tarea"
              fragment={<RegularPopup title="Asignar Tarea" content={<AsignarTarea/>} />}
            />
            <Item
              icon={faFileLines}
              label="Ver Examenes"
              fragment={<RegularPopup title="Ver Examenes" content={<></>} />}
            />
            <Item
              icon={faList}
              label="Asignar Encuesta"
              fragment={
                <RegularPopup title="Asignar Encuesta" content={<></>} />
              }
            />
          </ul>
        </section>
      )}
    </div>
  );
}

function Item({icon,label,fragment}:{icon:IconProp,label:string,fragment:ReactNode})
{
  const{setShowPopup}=useContext(appContext)

  return(
    <li className='flex py-[.8rem] px-[1rem] border-b-[1px] border-myBorderDark items-center gap-[2rem]'>
       <FontAwesomeIcon size='xl' icon={icon} />
       <MyButtonLink type='thin' label={label} onClick={()=>setShowPopup({show:true,popup:fragment})} />
    </li>
  )
}

