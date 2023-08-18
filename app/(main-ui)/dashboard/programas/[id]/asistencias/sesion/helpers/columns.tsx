"use client"

import DeleteAlert from "@/components/DeleteAlert/DeleteAlert"
import RegularPopup from "@/components/RegularPopup/RegularPopup"
import appContext from "@/context/appContext"
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"


const columns=
[
    {
        name:'dni',
        selector:(row:any)=>row.dni
    },
    {
        name:'correo',
        selector:(row:any)=>row.correo
    },
    {
        name:'nombre',
        selector:(row:any)=>row.nombre
    },
    {
        name:'sesion Nº',
        selector:(row:any)=>row.sesion
    },
    {
        name:'asistencia',
        selector:(row:any)=><Asistencia bool={row.asistencia} />
    },
    {
        name:'acciones',
        cell:(row:any)=><ChangeAsistencia bool={row.asistencia} />
    },
]

interface getType 
{
  color: "text-green-400" | "text-red-400"
  bg:"bg-green-400"|"bg-red-400"
  icon: IconProp;
}

function getType(bool: boolean): getType 
{
  if (bool) return { color: "text-green-400",bg:"bg-green-400", icon: faCheckCircle };
  return { color: "text-red-400", bg: "bg-red-400", icon: faXmarkCircle };
}


function Asistencia({bool}:{bool:boolean})
{
  return(
    <FontAwesomeIcon className={getType(bool).color} size="2xl"  icon={getType(bool).icon} />
  )
}

function ChangeAsistencia({bool}:{bool:boolean})
{
  const{setShowPopup}=useContext(appContext)

  return(
    <button onClick={()=>setShowPopup({show:true,popup:<RegularPopup title="Guardar Asistencia" content={<DeleteAlert fullLine="¿Desea guardar la asistecia?" />} />})} className={`${getType(bool).bg} flex text-[#fff] items-center px-[2rem] py-[.5rem] gap-[.5rem] font-bold rounded-[.5rem] hover:`}>
        Guardar
        <FontAwesomeIcon size="xl" icon={getType(bool).icon} />
    </button>
  )
}

export default columns