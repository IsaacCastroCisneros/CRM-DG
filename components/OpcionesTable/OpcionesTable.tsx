import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import { Fragment } from 'react'

export const OpcionesTable = ({tipo, id}:any) => 
{
    function editar(tipo:string)
    {
        switch(tipo)
        {
          case 'certificado':
            {
                return "/detallecertificado"
            }
          case 'pagos':
            {
                return "/detalle"
            }
          default: ""
        }
    }

    return (
        <>
            <div className="w-full  px-4">
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button className="relative">
                                <img src="/img/gif/options.gif" width={32} alt=""  />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="fixed z-10 -translate-x-1/2 -translate-y-[30%] transform px-3 sm:px-0 w-[150px] left-[96%] ">
                                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                        <div className="relative bg-white p-2">
                                            { tipo === "certificados" && (<Link href={`${tipo}/${id}`} className='flex items-center gap-2 font-medium p-1 hover:text-yellow-500'><i className="fi fi-rr-file flex items-cente"></i>Descargar</Link>) }
                                            <Link href={`/${tipo}${editar(tipo)}/${id}`} className='capitalize flex items-center gap-2 font-medium p-1 hover:text-blue-500'><i className="fi fi-rr-edit flex items-center"></i>Editar</Link>
                                            <p className='flex items-center gap-2 font-medium p-1 hover:text-red-500'><i className="fi fi-rr-trash flex items-center"></i>Eliminar</p>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
            </div>
        </>
    )
}