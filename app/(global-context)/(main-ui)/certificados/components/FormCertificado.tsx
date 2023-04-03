export const FormCertificado = () => {
    return (
        <form action="" className="flex items-center justify-between gap-4 flex-wrap py-10 px-8">
            <div className="xl:w-32 lg:w-32 md:w-32 w-full">
                <label htmlFor="" className="block">CODIGO</label>
                <input type="text" placeholder="12345" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none" />
            </div>
            <div className="xl:w-32 lg:w-32 md:w-32 w-full">
                <label htmlFor="" className="block">REGISTRO</label>
                <input type="text" placeholder="12345" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none" />
            </div>
            <div className="xl:w-56 lg:w-56 md:w-72 w-full">
                <label htmlFor="" className="block">NOMBRE</label>
                <input type="text" placeholder="Juan Alberto" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none" />
            </div>
            <div className="xl:w-56 lg:w-56 md:w-72 w-full">
                <label htmlFor="" className="block">APELLIDO</label>
                <input type="text" placeholder="Sanchez Cardenas" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2  focus:border-blue-400 outline-none" />
            </div>
            <div className="xl:w-28 lg:w-28 md:w-28 w-full">
                <label htmlFor="" className="block">DNI</label>
                <input type="text" placeholder="87456321" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none" />
            </div>
            <div className="xl:w-44 lg:w-44 md:w-44 w-full">
                <label htmlFor="" className="block">CATEGORIA</label>
                <select name="" id="" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none">
                    <option value="">Elegir:</option>
                    <option value="">Diploma</option>
                    <option value="">Diplomado</option>
                    <option value="">Curso</option>
                </select>
            </div>
            <div className="">
                <label htmlFor="" className="block">PROGRAMA</label>
                <select name="" id="" className='block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none'>
                    <option value="">SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA</option>
                    <option value="">DIPLOMAS</option>
                    <option value="">DIPLOMADOS</option>
                    <option value="">CURSOS</option>
                </select>
            </div>
            <div className="flex justify-between items-center gap-9 flex-wrap">
                <div className="w-56">
                    <label htmlFor="" className="block">ESTADO</label>
                    <select name="" id="" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none">
                        <option value="">Entregado</option>
                        <option value="">Aula Virtual</option>
                        <option value="">Olva</option>
                        <option value="">Pendiente</option>
                        <option value="">Oficina</option>
                    </select>

                </div>
                <div className="">
                    <label htmlFor="" className="block">MES/AÑO</label>
                    <input type="date" placeholder="87456321" className="block bg-colorInput text-gray-400 w-full border rounded-md p-2 focus:border-blue-400 outline-none" />
                </div>
                <div className="">
                    <br />
                    <button className='text-[#49CAD0] flex items-center p-2 bg-white gap-2 border-2 border-[#49CAD0] rounded-lg'><img src="/img/gif/CodigoQr.gif" alt="" width={30} />  Generar QR</button>
                </div>

            </div>
        </form>
    )
}