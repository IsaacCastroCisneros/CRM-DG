import Options from "@/components/Options/Options"
import Option from "@/components/Option/Option"

const cursosVirtualesColumns = [
  {
    name: "Id",
    selector: (row: any) => row.id,
  },
  {
    name: "Codigo",
    selector: (row: any) => row.codigo,
  },
  {
    name: "Título",
    selector: (row: any) => row.titulo,
    width: "28rem",
  },
  {
    name: "Precio",
    selector: (row: any) => `S/.${row.precio}`,
  },
  {
    name: "Profesores",
    selector: (row: any) => row.profesores,
  },
  {
    name: "fecha inicio",
    selector: (row: any) => row.fechaInicio,
  },
  {
    name: "fecha fin",
    selector: (row: any) => row.fechaFin,
  },
  {
    name: "acciones",
    cell: (row:any) => (
      <Options>
        <Option label="ver" type="ver" href={`/dashboard/academico/cursos_virtuales/${row.id}`} />
        <Option label="Editar" type="edit" onClick={() => null} />
        <Option label="Eliminar" type="delete" onClick={() => null} />
        <Option label="Inscritos" type="user" onClick={() => null} />
        <Option label="Duplicar Curso" type="duplicate" onClick={() => null} />
      </Options>
    ),
    maxWidth:85
  },
];

export default cursosVirtualesColumns