"use client"
import dynamic from 'next/dynamic';
const TableEdit = dynamic(() => import("./components/TableEdit"), { ssr: false })


export default function EditCertificado({ params }: any) {
    const { id } = params
    return(
        <>{id}</>
    )
}

{/* <>
            <h1 className='Montserrat font-black text-2xl mb-5'>Cursos Inscritos de Juan Perez</h1>
            <TableEdit id={id} />
        </> */}