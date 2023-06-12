import React,{Dispatch, SetStateAction} from 'react'

interface filter
{
  label:string,
  options:Array<string>
}

export default function MyFilters({
  setMyFilter,
  filters,
}: {
  setMyFilter: Dispatch<SetStateAction<{ value: string; property: string }>>;
  filters: Array<filter>;
}) {
  return (
    <>
      {filters.map((fil, pos) => {
        return (
          <div className="flex" key={pos}>
            <select
              className="border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer"
              onChange={(e) =>
                setMyFilter({ value: e.target.value, property: fil.label })
              }
            >
              <option value="">{fil.label}</option>
              {fil.options.map((opt, pos) => {
                return (
                  <option key={pos} value={opt}>
                    {
                      opt
                    }
                  </option>
                );
              })}
            </select>
          </div>
        );
      })}
    </>
  );
}
