"use client"

import { useRouter } from 'next/navigation';
import { ModalProspecto } from './components/ModalProspecto';
import Link from 'next/link';
import TableProspectosId from './components/TableprospectosId';


const ProspectosId=({ params }: any)=> 
{
    const { id } = params
    const router = useRouter();
    return (

        <>
            <div className='flex justify-between items-center mb-5'>
                <h1 className='Montserrat font-black text-2xl'>Prospectos Curso SIAF Básico</h1>
                <div className='flex gap-3 flex-wrap'>
                    <ModalProspecto />
                    <Link href={'/dashboard/prospectos/id/creacionmasivo'} className='border border-[#00CCF2] py-2 px-3 rounded-full text-[#00CCF2] font-medium'>Agregar Masivo</Link>
                </div>  
            </div>
            <TableProspectosId id={id} />
        </>
    )
}

export default ProspectosId