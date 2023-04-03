"use clinet"
import { useState } from "react";

export const SearchComponen = ({ setFilterText, tipo }: any) => {
    const [valor, setValor] = useState<string>("")
    const handleChange = (e: any) => {
        setValor(e.target.value);
        setFilterText(e.target.value)
    }
    const enviarDatos = (e:any) => {
        e.preventDefault()  
    }

    return (

        <label className="relative block mb-5">
            <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                <img src="/img/gif/search.gif" alt="" width={30} />
            </span>
            <form action="" onSubmit={(e)=>enviarDatos(e)}>
                <input className="block bg-colorInput text-gray-400 w-full lg:w-72 xl:w-72 border rounded-md py-2 pl-9 pr-3 shadow-lg font-medium" placeholder={tipo} type="text" id="search" onChange={(e) => handleChange(e)} value={valor} />
            </form>
        </label>

    )

};

