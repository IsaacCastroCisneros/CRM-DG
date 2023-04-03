import Link from "next/link"

export const Acciones = () =>{
    return(
        <div className="flex gap-2">
            <button className="flex align-center items-center bg-blue-500 p-3 rounded-md"><i className="fa-solid fa-list text-white"></i></button>
            <button className="flex align-center items-center bg-yellow-400 p-3 rounded-md"><i className="fa-solid fa-pen-to-square text-white"></i></button>
            <button className="flex align-center items-center bg-red-500 p-3 rounded-md"><i className="fa-solid fa-eraser text-white"></i></button>
            <Link href={`/certificados/${10}`} >Hola</Link>
        </div>
    )
}