"use client"

import DeleteAlert from '@/components/DeleteAlert/DeleteAlert'
import { MyButtonLink } from '@/components/MyButtonLink/MyButtonLink'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import Option from '@/components/Option/Option'
import Options from '@/components/Options/Options'
import RegularPopup from '@/components/RegularPopup/RegularPopup'
import appContext from '@/context/appContext'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faChevronDown, faClipboard, faFile, faFileLines, faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useContext, useState} from 'react'

export const Sesion = (props:any) => 
{
  const
  {
    title,
    subtitle,
    fecha,
    hora
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
                  <RegularPopup title={`Editar ${title}`} content={<EditSession/>} />
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
            <Item icon={faFile} label="Ver Archivos" />
            <Item icon={faClipboard} label="Asignar Tarea" />
            <Item icon={faFileLines} label="Ver Examenes" />
            <Item icon={faList} label="Asignar Encuesta" />
          </ul>
        </section>
      )}
    </div>
  );
}

function Item({icon,label}:{icon:IconProp,label:string})
{
  return(
    <li className='flex py-[.8rem] px-[1rem] border-b-[1px] border-myBorderDark items-center gap-[2rem]'>
       <FontAwesomeIcon size='xl' icon={icon} />
       <MyButtonLink type='thin' label={label} onClick={()=>null} />
    </li>
  )
}

function EditSession()
{ 
  const[values,setValues]=useState(
    {
        titulo:'',
        tipoSesion:'',
        nombreSesion:'',
        contenidoSesion:'',
        fecha:'',
        hora:'',
        horaFin:'',
        stream:'',
        url:'',
        editada:'',
        id:'',
        profesor:'',
        tomarAsistencia:'',
        gratis:''
    })  

  return (
    <form>
      <MyFlexContainer>
        <MyFormInput
          name="titulo"
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, titulo: e.target.value };
            })
          }
        />
        <MyFormInput
          name="tipoSesion"
          options={["si", "no"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, tipoSesion: e.target.value };
            })
          }
        />
      </MyFlexContainer>
      <MyFormInput
        name="nombreSesion"
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, nombreSesion: e.target.value };
          })
        }
      />
      <MyFormInput
        name="contenidoSesion"
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, contenidoSesion: e.target.value };
          })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          name="fecha"
          type='date'
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, fecha: e.target.value };
            })
          }
        />
        <MyFormInput
          name="hora"
          type='time'
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, hora: e.target.value };
            })
          }
        />
        <MyFormInput
          name="horaFin"
          type='time'
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, horaFin: e.target.value };
            })
          }
        />
        <MyFormInput
          name="stream"
          options={["si", "no"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, stream: e.target.value };
            })
          }
        />
      </MyFlexContainer>
      <MyFormInput
        name="url"
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, url: e.target.value };
          })
        }
      />
      <MyFormInput
        name="editada"
        options={["Si", "No"]}
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, editada: e.target.value };
          })
        }
      />
      <MyFormInput
        name="id"
        onChange={(e) =>
          setValues((prev) => {
            return { ...prev, id: e.target.value };
          })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          name="profesor"
           options={["si", "no"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, profesor: e.target.value };
            })
          }
        />
        <MyFormInput
          name="tomarAsistencia"
           options={["Si", "No"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, tomarAsistencia: e.target.value };
            })
          }
        />
        <MyFormInput
          name="gratis"
           options={["Si", "No"]}
          onChange={(e) =>
            setValues((prev) => {
              return { ...prev, gratis: e.target.value };
            })
          }
        />
      </MyFlexContainer>
    </form>
  );
}