"use client"
import { BtnHistorial } from "@/components/BtnHistorial/BtnHistorial"
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useState, useRef } from 'react';

export const ModalHistorial = () => {
    const [show, setShow] = useState(true)
    const [modal, setModal] = useState<boolean>(false)
    const handleClickOutsideFn = () => {
        setModal(false)
    }
    const myRefElement1 = useRef(null);
    useOnClickOutside(myRefElement1, handleClickOutsideFn);
    return (
        <>

            {/**AQUI VAL EL BOTON */}
            <BtnHistorial setModal={setModal}/>
            <div className={`fixed w-[30%] bg-white h-screen top-0 right-0 z-20 py-10 px-5 shadow-xl transition ${modal ? "translate-x-[0]" : "translate-x-[100%]"}`} ref={myRefElement1}>
                <div className='flex items-center justify-between mb-5'>
                    <p className='font-black text-xl'>Historial de Conversaciones</p>
                    <button className='border border-blue-500 rounded text-blue-500 font-black flex items-center gap-2 p-2 text-base'><i className="fa-solid fa-file-medical"></i>Agregar Nota</button>
                </div>
                <hr></hr>
                <div className='mt-3'>
                    <p className='font-black text-lg'>Conversación</p>
                    <div className='mt-5'>
                        <div className={`overflow-hidden transition-all duration-[150ms] ${show ? "h-[51px]" : "h-96"}`} >

                            <button className="bg-[#f5f5f5] w-[100%] text-left p-[1rem] flex justify-between border rounded-t-lg font-black items-center" onClick={() => setShow(!show)}>
                                <strong>
                                    <span className=" text-[#363535]">Maria Valle</span>
                                </strong>
                                <div className='flex gap-2 items-center'>
                                    <span>13/01/20122 - 09:44pm</span>
                                    <i className={`fa-solid ${!show ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
                                </div>
                            </button>


                            <div className='py-7 px-5 border rounded-b-lg'>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}