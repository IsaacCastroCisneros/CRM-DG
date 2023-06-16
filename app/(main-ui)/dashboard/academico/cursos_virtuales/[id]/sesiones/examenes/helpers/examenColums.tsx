"use client"

import Option from "@/components/Option/Option"
import Options from "@/components/Options/Options"
import appContext from "@/context/appContext";
import { useContext } from "react";
import { EditForm } from "../components/EditForm";

const exameColumns = [
    {
      name: "titulo",
      selector: (row: any) => row.titulo,
    },
    {
      name: "fecha",
      selector: (row: any) => row.fecha,
    },
    {
      name: "Opciones",
      cell: () => (
       <MyOptions/>
      ),
    },
  ];

function MyOptions()
{
  const{setShowPopup}=useContext(appContext)

  return (
    <Options>
      <Option label="editar" type="edit" onClick={() => setShowPopup({show:true,popup:<EditForm/>})} />
      <Option label="eliminar" type="delete" onClick={() => null} />
      <Option label="copiar" type="duplicate" onClick={() => null} />
    </Options>
  );
}

export default exameColumns