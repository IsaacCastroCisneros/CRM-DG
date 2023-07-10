"use client"

import Image from "next/image";
import { useState } from "react";
import { MenuColumns } from "@/components/MenuColumns/MenuColumns";

const cursosVirtualesColumns = 
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
    selector: (row: any) => <SwitchColumn status={row.estado} labels={['Publicado','No Publicado']} />,
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
    selector: (row: any) => <SwitchColumn status={row.destacado} labels={['Si','No']} />,
    width:'10rem'
  },
  {
    name: "acciones",
    cell: (row:any) => <MenuColumns/>,
  },
];

function SwitchColumn({status,labels}:{status:boolean,labels:[string,string]})
{
  const[toggle,setToggle]=useState<boolean>(status)

  return (
   <button className={`${toggle ? 'bg-myGreen flex-row-reverse':'bg-myRed'} rounded-[1rem] justify-between text-[#fff] h-[30px] px-[.5rem] flex w-[125px]  items-center font-bold gap-[.3rem]`}
    onClick={()=>setToggle(prev=>!prev)}
    >
       <span className="bg-[#fff] w-[.8rem] h-[.8rem] rounded-[100%]"></span>
       <span className="text-[.9rem]">{toggle ? labels[0]:labels[1]} </span>
   </button>
  );
}

export default cursosVirtualesColumns