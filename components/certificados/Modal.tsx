"use client"

import { useState } from 'react';

export const Modal = () => {

    const [open, setOpen] = useState<Boolean>(false)

    return (
        <>
            <button className="rounded-lg bg-red-400 py-2 px-5 text-white font-medium flex items-center gap-3 text-base" onClick={() => setOpen(!open)}><i className="fa-solid fa-circle-plus text-white"></i>Nuevo Ceriticado</button>
            {
                open && (
                    <>
                        <div className='z-40 w-screen h-screen bg-[#000] fixed left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] opacity-70' onClick={() => setOpen(!open)}>
                        </div>

                        <div className="fixed z-50 left-1/2 top-1/2 bg-white shadow-xl w-[90%] xl:w-[37%] lg:w-[37%] translate-x-[-50%] translate-y-[-50%]">
                            <div className="flex items-center justify-between py-5 px-3 bg-blue-500">
                                <h1 className='text-2xl font-medium text-white'>Crear Certificado</h1>
                                <button type="button" className="absolute left-[95%] mt-2" onClick={() => setOpen(!open)}><i className="fa-solid fa-circle-xmark text-white"></i></button>
                            </div>
                            <hr></hr>
                            <div className='py-7 px-5'>
                                <form className="w-full">
                                    <div className="flex flex-wrap -mx-3 mb-2 justify-between px-3">
                                        <div className="w-full md:w-auto md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                                CODIGO DE:
                                            </label>

                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-2 leading-tight focus:outline-none focus:bg-white placeholder:text-base text-base" id="grid-first-name" type="text" placeholder="EJEM: CCDG-000" />

                                        </div>
                                        <div className="w-full md:w-auto">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                REGISTRO:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base text-base" id="grid-last-name" type="text" placeholder="EJEM: 10706" />
                                        </div>
                                        <div className="w-full md:w-auto">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                DNI:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base text-base" id="grid-last-name" type="text" placeholder="EJEM: 87456321" />
                                        </div>
                                    </div>


                                    <div className="flex flex-wrap -mx-3 mb-2 px-3">
                                        <div className="w-full">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                NOMBRES:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base text-base" id="grid-password" type="password" placeholder="EJEM: XXXXX XXXX XXXX" />
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 px-3 justify-between">
                                        <div className="w-full md:w-[24%] md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                                CATEGORIA:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 mb-3 leading-tight focus:outline-none focus:bg-white placeholder:text-base text-base" id="grid-first-name " type="text" placeholder="EJEM: DIPLOMA" />
                                        </div>
                                        <div className="w-full md:w-[24%]">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                PROGRAMA:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base text-base" id="grid-last-name" type="text" placeholder="EJEM: OSCE" />
                                        </div>
                                        <div className="w-full md:w-[24%]">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                MES:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base text-base" id="grid-last-name" type="text" placeholder="EJEM: 05" />
                                        </div>
                                        <div className="w-full md:w-[24%] ">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                AÑO:
                                            </label>
                                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 placeholder:text-base text-base" id="grid-last-name" type="text" placeholder="EJEM: 2023" />
                                        </div>
                                    </div>
                                    <div className='flex w-full justify-end'>
                                        <button className='bg-blue-500 text-white p-2 text-sm mt-5 flex gap-3 items-center drop-shadow-lg'><i className="fa-solid fa-paper-plane"></i>Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </>
                )
            }

        </>
    )
}