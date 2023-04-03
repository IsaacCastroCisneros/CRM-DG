"use client"
import DataTable, { TableColumn } from 'react-data-table-component';

import { data } from './interface/data';
import { DataRow } from './interface/interfaceData';
import { EstilosData } from './components/StyleComponent';
import { FiltraDatos } from './hook/FiltraDatos';
import { ExportExcel } from './hook/ExportExcel';
import { Acciones } from './components/Acciones';
import XLSX from 'xlsx'

const columns: TableColumn<DataRow>[] = [
    {
        cell: () => <i className="fa-solid fa-graduation-cap fa-2x text-green-400"></i>,
        width: "5rem"
    },
    {
        name: 'ID',
        sortable: true,
        selector: row => row.Id,
        width: "7rem",

    },
    {
        name: 'Codigo',
        sortable: true,
        selector: row => row.Codigo,
        width: "7rem"
    },
    {
        name: 'Registro',
        sortable: true,
        selector: row => row.Registro,
        width: "7rem"
    },
    {
        name: 'Nombre',
        sortable: true,
        selector: row => row.Nombre,
        width: "15rem"
    },
    {
        name: 'Dni',
        sortable: true,
        selector: row => row.Dni,
        width: "7rem"
    },
    {
        name: 'Mes',
        sortable: true,
        selector: row => row.Mes,
        width: "7rem"
    },
    {
        name: 'Acciones',
        cell: () => <Acciones />,
    },

];


export default function TableData() 
{
    const [filteredItems, subHeaderComponentMemo] = FiltraDatos(data)
    const [actionsMemo] = ExportExcel(data)

    return (
        <DataTable
            columns={columns}
            data={filteredItems}
            subHeaderComponent={subHeaderComponentMemo}
            pagination
            subHeader
            highlightOnHover
            customStyles={EstilosData}
            actions={actionsMemo}
        />

    )
}