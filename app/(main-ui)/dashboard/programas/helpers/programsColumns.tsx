"use client"

import Image from "next/image";
import { MenuColumns } from "@/components/MenuColumns/MenuColumns";
import SwitchColumn from "@/components/SwitchColumn/SwitchColumn";
import Option from "@/components/Option/Option";
import menuOptions from "./menuOptions";

const programsColumns = 
[
  {
    name: "Miniatura",
    selector: (row: any) => <Image src={row.img} width={32} height={32} className="rounded-[100%]" alt="img" />,
  },
  {
    name: "tipo",
    selector: (row: any) => row.type,
  },
  {
    name: "Título de programa",
    selector: (row: any) => row.titulo,
    width: "10rem",
  },
  {
    name: "modalidad",
    selector: (row: any) => row.mode,
  },
  {
    name: "sesiones",
    selector: (row: any) => row.sessions,
  },
  {
    name: "estado",
    selector: (row: any) => <SwitchColumn status={row.status} labels={['Publicado','No Publicado']} />,
    width:'10rem'
  },
  {
    name: "alumnos",
    selector: (row: any) => row.students,
  },
  {
    name: "precio",
    selector: (row: any) => row.price,
  },
  {
    name: "destacado",
    selector: (row: any) =><SwitchColumn status={row.destacado} labels={['Si','No']} />,
    width:'10rem'
  },
  {
    name: "fecha",
    selector: (row: any) =>row.created,
  },
  {
    name: "acciones",
    cell: (row:any) =>(
      <div className="flex gap-[1rem]">
        <Option label="clonar" type="copy" onClick={()=>null} />
        <MenuColumns options={menuOptions} /> 
      </div>
    ),
  },
];



export default programsColumns