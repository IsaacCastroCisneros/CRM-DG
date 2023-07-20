import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PropsFilter {
    filterText: any,
    onFilter: any,
    onClear: any
}

export const FilterComponent: React.FC<PropsFilter> = ({ filterText, onFilter}) => {
    return (
      <div className="relative">
        <FontAwesomeIcon className="absolute top-[50%] translate-y-[-50%] left-[.5rem]" icon={faMagnifyingGlass} />
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white max-[8rem] my-shadow rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary sm:text-sm"
          placeholder="Buscar..."
          type="text"
          id="search"
          value={filterText}
          onChange={onFilter}
        />
      </div>
    );

};

