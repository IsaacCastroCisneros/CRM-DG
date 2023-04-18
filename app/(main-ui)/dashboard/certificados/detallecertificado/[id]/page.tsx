"use client"

const DetalleCertificado=({ params }: any)=> 
{
    const { id } = params
    return (
        <>
            <h1 className='Montserrat font-black text-2xl mb-5'> Detalles del Certificado de Juan Perez</h1>
            <div className="border border-gray-200 rounded-md p-5 flex flex-wrap justify-between">
                <div className="flex items-center gap-2 w-full">
                    <img src="/img/Gif/CamionEnvio.gif" alt="" width={50} />
                    <h2 className="text-gray-500 text-lg font-semibold">Ver Datos de Entrega:</h2>
                </div>
                <div className="w-full lg:w-auto xl:w-auto">
                    <h3 className="font-semibold mt-3">Direccion:</h3>
                    <p className="bg-gray-100 px-6 py-2 rounded-lg border border-gray-300 w-full lg:w-auto xl:w-auto mt-3">Av. Antigua Pan. Sur 243 Mala Cañete Peru</p>
                </div>
                <div className="w-full lg:w-auto xl:w-auto">
                    <h3 className="font-semibold mt-3">Urbanizacion:</h3>
                    <p className="bg-gray-100 px-6 py-2 rounded-lg border border-gray-300 w-full lg:w-auto xl:w-auto mt-3">SECTOR PUNTA DEL ESTE</p>
                </div>
                <div className="w-full lg:w-auto xl:w-auto">
                    <h3 className="font-semibold mt-3">Departamento:</h3>
                    <p className="bg-gray-100 px-6 py-2 rounded-lg border border-gray-300 w-full lg:w-auto xl:w-auto mt-3">SAN MARTIN</p>
                </div>
                <div className="w-full lg:w-auto xl:w-auto">
                    <h3 className="font-semibold mt-3">Provincia:</h3>
                    <p className="bg-gray-100 px-6 py-2 rounded-lg border border-gray-300 w-full lg:w-auto xl:w-auto mt-3">SAN MARTIN</p>
                </div>
                <div className="w-full lg:w-auto xl:w-auto">
                    <h3 className="font-semibold mt-3">Distrito:</h3>
                    <p className="bg-gray-100 px-6 py-2 rounded-lg border border-gray-300 w-full lg:w-auto xl:w-auto mt-3">TARAPOTO</p>
                </div>
                <div className="w-full lg:w-auto xl:w-auto">
                    <h3 className="font-semibold mt-3">Referencia:</h3>
                    <p className="bg-gray-100 px-6 py-2 rounded-lg border border-gray-300 w-full lg:w-auto xl:w-auto mt-3">AL COSTADO IZQUIERDO DEL EX CENTRO DE SALUD PUNTA DEL ESTE</p>
                </div>
            </div>

            <div className="border border-gray-200 rounded-md p-5 flex flex-wrap justify-between mt-10">
                <div className="flex items-center gap-2 w-full">
                    <img src="/img/Gif/alert.gif" alt="" width={50} />
                    <h2 className="text-gray-500 text-lg font-semibold">Observaciones de Certificados:</h2>
                </div>
                <div className="flex gap-5 items-center mt-5">
                    <p className="text-red-500">Usted tiene una observacion <span className="font-semibold">1 PENDIENTE</span></p>
                    <button className="bg-red-500 text-white p-2 rounded-md">Ver Observacion</button>
                </div>

            </div>
        </>
    )
}