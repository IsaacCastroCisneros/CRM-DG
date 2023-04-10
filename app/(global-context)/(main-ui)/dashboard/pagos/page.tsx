import dynamic from "next/dynamic"
import Link from "next/link"

const TablePagos = dynamic(() => import("./components/TablePagos"), { ssr: false })

export default function Pagos() {
    return (
      <>
        <div className="flex justify-between w-[100%] items-center">
          <h1 className="Montserrat font-black text-2xl mb-5">
            Listado de Pagos
          </h1>
          <Link
            href={"/dashboard/pagos/new"}
            className="bg-[#00CCF2] text-white rounded-full py-2 px-3 font-medium"
          >
            + Agregar Nuevo
          </Link>
        </div>
        <TablePagos />
      </>
    );
}