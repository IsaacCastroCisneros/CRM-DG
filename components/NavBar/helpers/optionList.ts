import option from "../interfaces/option";

const optionList: Array<option> = [
  {
    label: "Programas",
    options: [
      {
        label: "Listar",
        href: "/dashboard/programas",
      },
      {
        label: "Crear",
        href: "/dashboard/programas/new",
      },
      {
        label: "Categoria",
        href: "/dashboard/programas/categorias",
      }
    ],
  },
  {
    label: "certificados",
    path: "/dashboard/certificados",
  },
  {
    label: "email",
    path: "/dashboard/email",
  },
  {
    label: "envios",
    path: "/dashboard/envios",
  },
  {
    label: "pagos",
    path: "/dashboard/pagos",
  },
  {
    label: "programas/alumno",
    path: "/dashboard/programas_alumno",
  },
  {
    label: "propsectos",
    path: "/dashboard/propsectos",
  },
  {
    label: "usuarios",
    path: "/dashboard/usuarios",
  },
];

export default optionList