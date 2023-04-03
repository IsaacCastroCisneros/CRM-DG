

export const BotonProspectos = ({ setFilterText }: any) => {
    const button = [{
        id: "1",
        name: "TODOS",
        filtro: ""
    },
    {
        id: "2",
        name: "CURSO",
        filtro: "CURSO"
    },
    {
        id: "3",
        name: "DIPLOMAS",
        filtro: "DIPLOMAS"
    },
    {
        id: "4",
        name: "DIPLOMADOS",
        filtro: "DIPLOMADOS"
    }
    ]
    return (
        <div className="w-full flex justify-between items-center my-5">
            <div className="flex gap-3 items-center">
                {
                    button.map((opc) => (
                        <button key={opc.id} onClick={() => setFilterText(opc.filtro)} className="py-1 px-3 rounded border-indigo-400 border-2 text-indigo-400 focus:bg-indigo-400 focus:text-white">{opc.name}</button>
                    ))
                }
            </div>
            <button className="py-1 px-3 bg-green-500 text-white flex gap-2 font-medium items-center rounded h-full"><i className="fa-solid fa-person-circle-plus"></i>Crear Prospecto</button>
        </div>
    )

};

