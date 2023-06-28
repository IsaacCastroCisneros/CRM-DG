"use client"

import Option from "@/components/Option/Option"
import Options from "@/components/Options/Options"
import appContext from "@/context/appContext";
import { useContext } from "react";
import { EditForm } from "../components/EditForm/EditForm";
import RegularPopup from "@/components/RegularPopup/RegularPopup";
import DeleteAlert from "@/components/DeleteAlert/DeleteAlert";
import { CopyExam } from "../components/CopyExam/CopyExam";

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
      <Option
        label="editar"
        type="edit"
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup title="Editar Examen" content={<EditForm />} />
            ),
          })
        }
      />
      <Option
        label="eliminar"
        type="delete"
        onClick={() =>
          setShowPopup({
            show: true,
            popup: (
              <RegularPopup
                title="Elimnar Examen"
                content={<DeleteAlert subject="Examen" />}
              />
            ),
          })
        }
      />
      <Option
        label="copiar"
        type="duplicate"
        onClick={() =>
          setShowPopup({
            show: true,
            popup: <RegularPopup title="Copiar Examen" content={<CopyExam/>} />,
          })
        }
      />
    </Options>
  );
}

export default exameColumns