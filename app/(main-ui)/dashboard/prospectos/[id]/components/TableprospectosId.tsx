"use client"
import DataTable, { TableColumn } from "react-data-table-component";
import { DatosProspectos } from '@/helpers/DatosProps';
import { AlumnosPros } from '../../interface/InterfaceProps'
import { BtnExportExcel } from '@/components/BtnExportExcel/BtnExportExcel';
import { SearchComponen } from '@/components/SearchComponen/SearchComponen';
import { useFiltrosTable } from "@/hooks/useFiltroTable";
import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import { useLoading } from "@/hooks/useLoading";
import { ModalHistorial } from "./ModalHistorial";
import { ConvertirAlumno } from "./ConvertirAlumno";

const columns: TableColumn<AlumnosPros>[] =
    [
        {
            name: 'NOMBRES',
            sortable: true,
            center:true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.nombre}</p>
        },
        {
            name: 'MEDIO',
            sortable: true,
            center:true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.medio}</p>
        },
        {
            name: 'PROGRAMA',
            sortable: true,
            center: true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.programa}</p>
        },
        {
            name: 'ESTADO',
            sortable: true,
            cell: row => row.estado,
            center: true,
            style: {
                color: 'white',
                fontSize: "15px",
                margin: "4px",
                borderRadius: "5px",
                fontWeight: 700
            },
            conditionalCellStyles: [
                {
                    when: row => row.estado === "Comprado",
                    style: {
                        backgroundColor: '#4ad69d',
                    }
                },
                {
                    when: row => row.estado === "No desea",
                    style: {
                        backgroundColor: '#e2445c',
                    }
                },
                {
                    when: row => row.estado === "En curso",
                    style: {
                        backgroundColor: '#fdab3d',
                    }
                }

            ]
        },
        {
            name: 'HISTORIAL',
            sortable: true,
            center: true,
            cell: row => <ModalHistorial />
        },
        {
            name: 'CORREO',
            sortable: true,
            center:true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.correo}</p>
        },
        {
            name: 'FECHA',
            sortable: true,
            center:true,
            cell: row => <p className="text-gray-400 font-medium text-[15px]">{row.fechaRegistro}</p>
        },
        {
            name: "CONVERTIR ALUMNO",
            sortable: true,
            center:true,
            cell: row => <ConvertirAlumno />
        }
    ];
export default function TableProspectosId({ id }: any) {

    const [setFilterText, , , , filteredItems] = useFiltrosTable(DatosProspectos[id].alumnos)
    const [pending] = useLoading(DatosProspectos[id].alumnos)

    return (
        <>
            <div className="flex justify-between mb-5">
                <SearchComponen setFilterText={setFilterText} />
                <BtnExportExcel data={filteredItems} />
            </div>
            <DataTable
                columns={columns}
                data={filteredItems}
                highlightOnHover
                pagination
                progressPending={pending}
                progressComponent={<LoadingComponent />}
            />
        </>

    )
}