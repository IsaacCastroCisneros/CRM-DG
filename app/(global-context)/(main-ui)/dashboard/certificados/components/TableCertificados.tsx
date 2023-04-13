"use client"
import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import { OpcionesTable } from '@/components/OpcionesTable/OpcionesTable';
import { SearchComponen } from '@/components/SearchComponen/SearchComponen';
import { DataCertificados } from '@/helpers/DataCertificados';
import { useFiltrosTable } from '@/hooks/useFiltroTable';
import { useLoading } from '@/hooks/useLoading';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DataCertificado } from '../interface/InterfaceCertificados';
import CertificadosOpciones from './CertificadosOpciones/CertificadosOpciones';
import { ModalHistorialCer } from './ModalHistorialCer';

const columns: TableColumn<DataCertificado>[] = [
    {
        name: 'COD',
        sortable: true,
        selector: row => row.Id,
        center: true
    },
    {
        name: 'NOMBRE',
        sortable: true,
        selector: row => row.nombre,
        center: true
    },
    {
        name: 'DNI',
        sortable: true,
        selector: row => row.Dni,
        center: true
    },
    {
        name: 'CATEGORIA',
        sortable: true,
        selector: row => row.Categoria,
        center: true
    },
    {
        name: 'PROGRAMA',
        sortable: true,
        selector: row => row.Programa,
        width: "18rem",
        center: true
    },
    {
        name: 'HISTORIAL',
        sortable: true,
        cell: () => <ModalHistorialCer />,
        center: true
    },
    {
        name: 'CERTIFICADO',
        sortable: true,
        cell: () => <img src="/img/gif/certi.gif" width={35} alt="" />,
        center: true
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
            borderRadius: "5px"
        },
        conditionalCellStyles: [
            {
                when: row => row.estado === "Entregado",
                style: {
                    backgroundColor: '#4AD69D',
                }
            },
            {
                when: row => row.estado === "Oficina",
                style: {
                    backgroundColor: '#4A53D6',
                }
            },
            {
                when: row => row.estado === "Aula Virtual",
                style: {
                    backgroundColor: '#FAFAFA',
                    border: "1px solid gray",
                    color: "gray"
                }
            },
            {
                when: row => row.estado === "Olva",
                style: {
                    backgroundColor: '#FDAB3D',
                }
            },
            {
                when: row => row.estado === "Pendiente",
                style: {
                    backgroundColor: '#2BBC10',
                }
            }

        ]
    },
    {
        name: 'FECHA',
        sortable: true,
        selector: row => row.Mes,
        center: true,
    },
    {
        name:'Opciones',
        cell: row => <CertificadosOpciones row={row} />,
    }

];
export const TableCertificados = () => {
    const [setFilterText, , , , filteredItems] = useFiltrosTable(DataCertificados)
    const [pending] = useLoading(filteredItems)
    return (
        <div>
            <SearchComponen setFilterText={setFilterText} />
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
                progressPending={pending}
                progressComponent={<LoadingComponent />}
            />
        </div>
    )
}   

/* hhh */