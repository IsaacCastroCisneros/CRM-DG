"use client"

import DeleteAlert from "@/components/DeleteAlert/DeleteAlert"
import Option from "@/components/Option/Option"
import Options from "@/components/Options/Options"
import RegularPopup from "@/components/RegularPopup/RegularPopup"
import appContext from "@/context/appContext"
import defaultColumns from "@/helpers/defaultColumns"
import { useContext } from "react"


const columns = defaultColumns([
  {
    name: "pregunta",
    selector: (row: any) => row.name,
  },
  {
    name: "respuesta",
    selector: (row: any) => row.answer,
  },
  {
    name: "acciones",
    cell: () => (
      <Options>
        <Option label="editar" type="edit" href="edit" />
        <MyOption />
      </Options>
    ),
  },
]);

function MyOption()
{
  const{setShowPopup}=useContext(appContext)

  return (
    <Option
      label="eliminar"
      type="delete"
      onClick={() =>
        setShowPopup({
          show: true,
          popup: (
            <RegularPopup
              title="eliminar pregunta"
              content={<DeleteAlert subject="pregunta" />}
            />
          ),
        })
      }
    />
  );
}

export default columns