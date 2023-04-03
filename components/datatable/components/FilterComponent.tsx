interface PropsFilter {
    filterText: any,
    onFilter: any,
    onClear: any
}

export const FilterComponent: React.FC<PropsFilter> = ({ filterText, onFilter, onClear }) => {
    return (
        <div className="flex justify-start w-full">
            <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <i className="fa-solid fa-magnifying-glass text-sky-500 "></i>
                </span>
                <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Buscar alumnos..." type="text" id="search" value={filterText} onChange={onFilter} />
            </label>
        </div>
    )

};

