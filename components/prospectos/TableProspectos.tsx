"use client"
import { DatosProspectos } from "@/helpers/DatosProspectos";
import { useMemo, useState } from 'react';
import DataTable, { TableColumn } from "react-data-table-component";
import { BotonProspectos } from './components/BotonProspectos';

export interface DataRow {
    nombre: string;
    medio: string;
    programa: string;
    modalidad: string;
    fechaRegistro: string;
    estado: string;
    correo: string;
    tipo: string
}

const columns: TableColumn<DataRow>[] = [
    {
        name: 'NOMBRE',
        sortable: true,
        selector: row => row.nombre,
        width: "9rem",

    },
    {
        name: 'MEDIO',
        sortable: true,
        selector: row => row.medio,
        width: "7rem"
    },
    {
        name: 'PROGRAMA',
        sortable: true,
        selector: row => row.programa,
        width: "10rem"
    },
    {
        name: 'MODALIDAD',
        sortable: true,
        selector: row => row.modalidad,
        width: "6rem"
    },
    {
        name: 'FECHA',
        sortable: true,
        selector: row => row.fechaRegistro,
        width: "7rem"
    },
    {
        name: 'ESTADO',
        sortable: true,
        selector: row => row.estado,
        width: "7rem"
    },
    {
        name: 'CORREO',
        sortable: true,
        selector: row => row.correo,
        width: "15rem"
    },
    {
        name: 'TIPO',
        sortable: true,
        selector: row => row.tipo,
        width: "15rem"
    },


];
export default function TableProspectos() {


    const [filterText, setFilterText] = useState('');

    const filteredItems = DatosProspectos.filter(
        item => item.tipo && item.tipo.toLowerCase().includes(filterText.toLowerCase()),
    );

        console.log(filterText)


    return (
        <>
            <BotonProspectos setFilterText={setFilterText} />
            <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                highlightOnHover

            />
        </>
    )
}