import optionNav from '@/interfaces/optionNav';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope, faGraduationCap, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';

const optionList:Array<optionNav> =
  [
    {
      href:'/dashboard',
      label:"dashboard",
      icon:faHouse,
    },
    {
      href:'/dashboard/academico',
      label:"academico",
      icon:faBuildingColumns,
      submenu:
      [
        {
          label:'Cursos Virt. y Presc.',
          href:'/dashboard/academico/cursos_virtuales'
        },
      ]
    },
    {
      href:'/dashboard/prospectos',
      label:"prospectos",
      icon:faFolder,
    },
    {
      href:'/dashboard/certificados',
      label:"certificados",
      icon:faChartPie,
    },
    {
      href:'/dashboard/pagos',
      label:"pagos",
      icon:faDollar,
    },
    {
      href:'/dashboard/envios',
      label:"Envios",
      icon:faPaperPlane,
    },
    {
      href:'/dashboard/pendientes',
      label:"pendientes",
      icon:faRotateRight,
    },
    {
      href:'/dashboard/usuarios',
      label:"usuarios",
      icon:faUser,
    },
    {
      href:'/dashboard/email',
      label:"email",
      icon:faEnvelope,
    },
    {
      href:'/dashboard/programas_alumno',
      label:"Programas por Alumos",
      icon:faGraduationCap,
    },
  ]

export default optionList