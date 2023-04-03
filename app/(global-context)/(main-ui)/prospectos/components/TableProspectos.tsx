"use client"

import DataTable, { TableColumn } from "react-data-table-component";
import { useRouter } from 'next/navigation';
import { DataPros } from "../interface/InterfaceProps";
import { useFiltrosTable } from "@/hooks/useFiltroTable";
import { BotonesFiltros } from "./BotonesFiltro";
import Image from "next/image";
import Link from "next/link";

export const DatosProspectos:any = [
    {
      id: 0,
      nombre: "Sistema Integrado de Administración Financiera – SIAF",
      logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png",
      fecha: "17-01-2023",
      categoria: "Curso",
      modalidad: "Dual",
      prospectos: 50,
      alumnos: [{
        id: 1,
        nombre: "Juan Peres",
        medio: "WhatsApp",
        programa: "Marketing Digital",
        modalidad: "Virtual",
        correo: "juan@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "Comprado"
      },
      {
        id: 2,
        nombre: "Martin Ris",
        medio: "Facebook",
        programa: "Programacion",
        modalidad: "Presencial",
        correo: "mar@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "No desea"
      }
      ]
    },
    {
      id: 1,
      nombre: "Sistema Integrado de Gestión Administrativa – SIGA",
      logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/06/icono_contabilidad_gubernamental.png",
      fecha: "01-01-2023",
      categoria: "Diploma",
      modalidad: "Presencial",
      prospectos: 20,
      alumnos: [{
        id: 1,
        nombre: "Lucas Ris",
        medio: "Web",
        programa: "Sales Support",
        modalidad: "Presencial",
        correo: "juan@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "En curso"
      },
      {
        id: 2,
        nombre: "Martin Ris",
        medio: "Facebook",
        programa: "Programacion",
        modalidad: "Presencial",
        correo: "lucas@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "No desea"
      }
      ]
    },
    {
      id: 2,
      nombre: "Sistema Electrónico de Contrataciones del Estado – SEACE ",
      logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/icono-nuevo-curso-invierte.png",
      fecha: "05-01-2023",
      categoria: "Diploma",
      modalidad: "Presencial",
      prospectos: 20,
      alumnos: [{
        id: 1,
        nombre: "Pepe Lucho",
        medio: "Facebook",
        programa: "Sales Support",
        modalidad: "Presencial",
        correo: "pepe@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado  : "Comprado"
      },
      {
        id: 2,
        nombre: "Martin Ris",
        medio: "Facebook",
        programa: "Programacion",
        modalidad: "Presencial",
        correo: "lucas@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "No desea"
      }
      ]
    },
    {
      id: 3,
      nombre: "Ofimática para Servidores Públicos",
      logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/07/siga-patrimonio.png",
      fecha: "05-01-2023",
      categoria: "Curso",
      modalidad: "Virtual",
      prospectos: 10,
      alumnos: [{
        id: 1,
        nombre: "Sara Lopez",
        medio: "WhatsApp",
        programa: "Sales Support",
        modalidad: "Presencial",
        correo: "Sara@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "Comprado"
      },
      {
        id: 2,
        nombre: "Angie Madueño",
        medio: "Web",
        programa: "Programacion",
        modalidad: "Presencial",
        correo: "Angie@hotmail.com",
        fechaRegistro: "20/01/2023",
        estado: "En curso"
      }
      ]
    }
  ]

export default function TableProspectos() {
    const router = useRouter();
    const columns: TableColumn<DataPros>[] = [

        {
            name: 'Nombre de Programa',
            sortable: true,
            cell: row => <div className="flex items-center gap-6 p-2 w-full"><img src={row.logo} alt="" className="w-10" /><p className="text-gray-400 font-medium text-[15px]">{row.nombre}</p></div>,
            width: "35rem"
        },
        {
            name: 'Categoria',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.categoria}</p>
        },
        {
            name: 'Modalidad',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.modalidad}</p>
        },
        {
            name: 'Prospectos',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.prospectos}</p>
        },
        {
            name: 'Fecha',
            sortable: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.fecha}</p>
        },
        {
            name: 'Acciones',
            cell: row => <Link href={`/prospectos/${row.id}`}><Image src='/img/Gif/view.gif' alt='Logo' width={45} height={45} /> </Link>

        }
    ];

    const [setFilterText, setFilterSelect, setFiltroFechas, filteredAccounts] = useFiltrosTable(DatosProspectos)
    return (
        <>
            <BotonesFiltros setFilterText={setFilterText} setFilterSelect={setFilterSelect} setFiltroFechas={setFiltroFechas} />
            <DataTable
                columns={columns}
                data={filteredAccounts}
                pagination
                highlightOnHover
            />
        </>
    )
}
