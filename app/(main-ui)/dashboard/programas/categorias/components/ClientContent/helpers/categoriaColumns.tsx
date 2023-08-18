import DeleteAlert from "@/components/DeleteAlert/DeleteAlert";
import Option from "@/components/Option/Option";
import Options from "@/components/Options/Options"
import RegularPopup from "@/components/RegularPopup/RegularPopup";
import SwitchColumn from "@/components/SwitchColumn/SwitchColumn"
import appContext from "@/context/appContext";
import { useContext } from "react";

const categoriaColumns = [
  {
    name: "nombre",
    selector: (row: any) => row.name,
  },
  {
    name: "estado",
    selector: (row: any) => (
      <SwitchColumn status={row.status} labels={["activo", "inactivo"]} />
    ),
  },
  {
    name: "acciones",
    cell: (row: any) => (
      <Options>
        <Option label="editar" type="edit" href="edit" />
        <MyOption/>
      </Options>
    ),
  },
];

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
              content={<DeleteAlert subject="Categoria" />}
              title="Eliminar Categoria"
            />
          ),
        })
      }
    />
  );
}

export default categoriaColumns