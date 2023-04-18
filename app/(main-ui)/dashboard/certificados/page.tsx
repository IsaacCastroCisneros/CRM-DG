'use client';

import { CearCertificado } from './components/CearCertificado';
import { TableCertificados } from './components/TableCertificados';

const Certificados=()=> {
    return (
        <>
            <div className='flex justify-between items-center'>
                <h1 className='Montserrat font-black text-2xl mb-5'>Lista de Certificados</h1>
                <CearCertificado />
            </div>
            <TableCertificados />
        </>
    )
}

export default Certificados