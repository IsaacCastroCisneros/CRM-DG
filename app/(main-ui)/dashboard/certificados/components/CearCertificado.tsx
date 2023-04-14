import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { FormCertificado } from './FormCertificado'

export const CearCertificado = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    return (
        <>

            <button className='bg-[#00CCF2] text-white rounded-full py-2 px-3 font-medium' onClick={() => setIsOpen(true)}>+ Agregar Nuevo</button>


            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full lg:w-[45%] xl:w-[60%] 2xl:w-[45%]  transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all">
                                    <div className='w-full h-12 bg-[#97B1F7] text-white'>
                                        <div className='bg-[#4272EF] h-full flex items-center gap-3 py-5 px-[1rem] xl:w-1/3 lg:w-1/3 w-full justify-center'>
                                            <i className="fi fi-rr-diploma flex items-center"></i><h1 className='text-base font-medium'>Crear Nuevo Certificado</h1>
                                        </div>
                                    </div>

                                    {/*Aqui va el formulario Nuevo*/}

                                    <FormCertificado />

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}