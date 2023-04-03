"ise client"
import Image from 'next/image';

export const BtnHistorial = ({setModal}:any) => {

    return (

        <div className="flex items-center gap-5">
            <button className="relative" onClick={()=>setModal(true)}><Image src="/img/gif/historial.gif" width={40} height={40} alt="Desarrollo Global" /><p className='absolute right-[-7px] bottom-[-2px] bg-blue-500 rounded-full text-white text-[8px] w-4 h-4 flex justify-center items-center'>1</p></button>
            <img src="https://archivos-comunes.s3.amazonaws.com/2022/asesores/LUCERO+ALCANTARA.png" alt="" className='w-9 rounded-full' />
        </div>
    )
}