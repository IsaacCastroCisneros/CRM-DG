"use client"

import { MyButtonLink } from "@/components/MyButtonLink/MyButtonLink";
import appContext from "@/context/appContext";
import { faClipboard, faComment, faFolder, faGraduationCap, faList } from "@fortawesome/free-solid-svg-icons";
import { ReactNode, useContext } from "react";
import { CursoVirtualItem } from "../../../components/CursoVirtualItem";
import RegularPopup from "@/components/RegularPopup/RegularPopup";
import { Reportes } from "./components/Reportes";

export default function CursoVirtualItems({program}:{program:{id:number,name:string}})
{
  const{setShowPopup}=useContext(appContext)
  const{id,name}=program

  const local = `/dashboard/academico/cursos_virtuales/${id}/`


  const cursoVirtualItems = [
    {
      title: "Sesiones",
      description: "Lista de las sesiones del curso.",
      buttons: <MyButtonLink href={`${local}sesiones`} label="ver" />,
      icon: faFolder,
    },
    {
      title: "Asistencia",
      description: "Lista de asistencia de los alumnos del curso.",
      icon: faClipboard,
      buttons: (
        <FlexContainer>
          <MyButtonLink href={`${local}/asistencias/sesion`} label="ver por sesion" />
          <MyButtonLink href={`${local}`} label="ver por alumno" />
        </FlexContainer>
      ),
    },
    {
      title: "Examenes",
      description: "Lista de exámenes del curso.",
      icon: faGraduationCap,
      buttons: (
        <FlexContainer>
          <MyButtonLink href={`${local}/examenes`} label="ver" />
          <MyButtonLink
            onClick={() =>
              setShowPopup({
                show: true,
                popup: (
                  <RegularPopup
                    title={`Ver reportes de ${name}`}
                    content={<Reportes />}
                  />
                ),
              })
            }
            label="ver reportes"
          />
        </FlexContainer>
      ),
    },
    {
      title: "Encuestas",
      description: "Lista de encuestas del curso.",
      icon: faList,
      buttons: <MyButtonLink href={`${local}`} label="ver" />,
    },
    {
      title: "Testimonios",
      description: "Lista de testimonios del curso.",
      icon: faComment,
      buttons: <MyButtonLink href={`${local}`} label="ver" />,
    },
  ];

  

  return (
    <div className="grid-cols-[repeat(3,1fr)] gap-[3rem] grid">
      {cursoVirtualItems.map((c: any, pos: number) => (
        <CursoVirtualItem key={pos} {...c} />
      ))}
    </div>
  );
}
 

function FlexContainer({children}:{children:ReactNode})
{
  return(
    <div className="flex gap-[.5rem]">
      {
        children
      }
    </div>
  )
}
