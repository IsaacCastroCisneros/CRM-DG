"use clinet"
export const FechasComponent = ({ setFiltroFechas }: any) => {
    const valorFechas = (e: any) => {
        e.preventDefault()
        const start = (document.getElementById("start") as HTMLInputElement).value
        const end = (document.getElementById("end") as HTMLInputElement).value
        setFiltroFechas({
            valor1: start,
            valor2: end
        })
    }
    return (
        <form action="" onSubmit={(e) => valorFechas(e)} className="flex justify-between gap-5 flex-wrap">
            <div className="flex gap-3 items-center justify-between md:justify-around w-full md:w-[48%] lg:w-52 xl:w-52">
                <label htmlFor="" className="text-gray-400 font-medium">Inicio:</label>
                <input type="date" id="start" name="trip-start" className="py-2 px-3 rounded-lg shadow-lg bg-colorInput border text-gray-400 font-medium"
                    min="01-01-2023" max="01-01-2030"></input>
            </div>
            <div className="flex gap-3 items-center justify-between md:justify-around w-full md:w-[48%] lg:w-52 xl:w-52">
                <label htmlFor="" className="text-gray-400 font-medium">Fin:</label>
                <input type="date" id="end" name="trip-start" className="py-2 px-3 rounded-lg shadow-lg bg-colorInput border text-gray-400 font-medium"
                    min="01-01-2023" max="01-01-2030" ></input>
            </div>
            <button className="bg-blue-500 font-semibold text-white rounded-lg px-5 py-2">Buscar</button>
        </form>

    )
}