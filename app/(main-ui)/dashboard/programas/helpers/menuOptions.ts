import option from "@/interfaces/option"

function menuOptions(id:string):Array<option>
{
  return[
    {
      label: "información",
      href: "",
    },
    {
      label: "sesiones",
      href: `/dashboard/programas/${id}/sesiones`,
    },
    {
      label: "preguntas frecuentes",
      href: `/dashboard/programas/${id}/preguntas_frecuentes`,
    },
    {
      label: "pagina gracias",
      href: `/dashboard/programas/${id}/pagina_gracias`,
    },
    {
      label: "certificado settings",
      href: "",
    },
    {
      label: "preview",
      href: "",
    },
    {
      label: "delete",
      href: "",
    },
  ];
}


export default menuOptions