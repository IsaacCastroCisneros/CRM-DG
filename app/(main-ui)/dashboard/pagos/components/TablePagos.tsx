"use client"

import DataTable, { TableColumn } from 'react-data-table-component';
import { DataPagosd } from '../interface/InterfacePago';
import { DataPagos } from '@/helpers/DataPagos';
import { useFiltrosTable } from '@/hooks/useFiltroTable';
import { useLoading } from '@/hooks/useLoading';
import { SearchComponen } from '@/components/SearchComponen/SearchComponen';
import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import { ModalHitorialPa } from './ModalHitorialPa';
import { OpcionesTable } from '@/components/OpcionesTable/OpcionesTable';

const columns: TableColumn<DataPagosd>[] = [
    {
        name: 'ID',
        sortable: true,
        selector: row => row.id,
        center: true,
        width: "5rem"
    },
    {
        name: 'EDITOR',
        sortable: true,
        cell: row => <img src={row.editor[0].foto} alt={row.editor[0].foto} width="30" className='rounded-full' />,
        center: true,
        width: "5rem"
    },
    {
        name: 'FECHA VOUCHER',
        sortable: true,
        selector: row => row.fechaVoucher,
        center: true,
    },
    {
        name: 'MEDIO PAGO',
        sortable: true,
        selector: row => row.medioPago,
        center: true,
    },
    {
        name: 'PAGO',
        sortable: true,
        cell: row => <p>S/. {row.pago}</p>,
        center: true,
    },
    {
        name: 'COMPROBANTE',
        sortable: true,
        selector: row => row.comprobante,
        center: true,
    },
    {
        name: 'ALUMNO',
        sortable: true,
        cell: row => row.nombre,
        center: true,
    },
    {
        name: 'PROGRAMA',
        sortable: true,
        selector: row => row.programa,
        center: true
    },
    {
        name: 'HISTORIAL',
        sortable: true,
        cell: row => <ModalHitorialPa data={row} />,
        center: true,
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
        },
        conditionalCellStyles: [
            {
                when: row => row.estado === "PAGADO",
                style: {
                    backgroundColor: '#4AD69D',
                },
            },
            {
                when: row => row.estado === "PENDIENTE",
                style: {
                    backgroundColor: '#FDAB3D'
                }
            },
            {
                when: row => row.estado === "DEUDOR",
                style: {
                    backgroundColor: '#FAFAFA',
                    border: "1px solid gray",
                    color: "gray"
                }
            }
        ]
    },
    {
        button: true,
        cell: row => <OpcionesTable tipo="pagos" id={row.id} />
    }

];
const TablePagos=()=>
{
    const [setFilterText, , , , filteredItems] = useFiltrosTable(DataPagos)
    const [pending] = useLoading(filteredItems)
    return (
        <>
            <SearchComponen setFilterText={setFilterText} />
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover
                progressPending={pending}
                progressComponent={<LoadingComponent />}
            />
        </>
    )
}

export default TablePagos