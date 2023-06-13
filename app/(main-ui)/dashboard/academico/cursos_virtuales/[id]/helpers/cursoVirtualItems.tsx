import cursoVirtualItem from "../../interfaces/cursoVirtualItem";
import { MyButtonLink } from "@/components/MyButtonLink/MyButtonLink";
import { faClipboard, faComment, faFolder, faGraduationCap, faList } from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";

function cursoVirtualItems(id:number):Array<cursoVirtualItem>
{
  const local = `/dashboard/academico/cursos_virtuales/${id}/`

  return(
    [
      {
        title: "Sesiones",
        description: "Lista de las sesiones del curso.",
        buttons: <MyButtonLink href={`${local}sesiones`}  label="ver" />,
        icon: faFolder,
      },
      {
        title: "Asistencia",
        description: "Lista de asistencia de los alumnos del curso.",
        icon: faClipboard,
        buttons: (
          <FlexContainer>
            <MyButtonLink href={`${local}`} label="ver por sesion" />
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
            <MyButtonLink href={`${local}`} label="ver" />
            <MyButtonLink href={`${local}`} label="ver reportes" />
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
    ]
  )
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

export default cursoVirtualItems