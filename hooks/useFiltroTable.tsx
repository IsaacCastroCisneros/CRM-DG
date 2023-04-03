"use client"

import { ParseoFecha } from '@/helpers/funciones';
import { useState } from 'react';

export function useFiltrosTable(DatosProspectos:any) {
    
    const [filterText, setFilterText] = useState('');
    const [filterSelect, setFilterSelect] = useState('')
    const [filtroFechas, setFiltroFechas] = useState({
        valor1: "",
        valor2: ""
    })
    console.log(filterText)
    const filteredItems = DatosProspectos.filter((item: any) => item.nombre && item.nombre.toLowerCase().includes(filterText.toLowerCase()),);
    const filter2 = filteredItems.filter((items: any) => items.categoria && items.categoria.toLowerCase().includes(filterSelect.toLowerCase()),)

    const { valor1, valor2 } = filtroFechas

    let filteredAccounts = filter2.filter(function (account: any) {
        if (valor1.length > 0 && valor2.length > 0) {
            return ParseoFecha(account.fecha) > ParseoFecha(valor1) && ParseoFecha(account.fecha) < ParseoFecha(valor2)
        } else {
            return filteredItems
        }
    })

    return [
        setFilterText,
        setFilterSelect,
        setFiltroFechas,
        filteredAccounts,
        filteredItems


    ]
}