import MyAlumnosOptions from "./components/MyAlumnosOptions/MyAlumnosOptions";
import Program from "./components/Program/Program";


const columns = [
  {
    name: "Nombre de Programa",
    cell: (row: any) => <Program row={row} />,
  },
  {
    name: "Categoria",
    selector: (row: any) => row.categoria,
  },
  {
    name: "Modalidad",
    selector: (row: any) => row.modalidad,
  },
  {
    name: "Alumnos",
    cell: (row: any) => row.alumnos,
  },
  {
    name: "Acciones",
    cell: (row: any) => <MyAlumnosOptions row={row} />,
  },
];

export default columns