import filter from '@/interfaces/filter';
import React,{Dispatch, SetStateAction} from 'react'

interface myFilter
{
  label:string,
  labelOnScreen?:string
  options:Array<string|{value:string,label:string}>
}

interface props
{
  setMyFilter: Dispatch<SetStateAction<Array<filter>>>;
  filters: Array<myFilter>;
  myFilters?:Array<filter>
}

export default function MyFilters({setMyFilter,filters}:props) 
{
  
  return (
    <>
      {filters.map((fil, pos) => {
        return (
          <div className="flex" key={pos}>
            <select
              className="my-shadow rounded-[.5rem] text-myGray3 font-medium border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer capitalize"
              onChange={(e) => {
                setMyFilter((prev)=>
                {
                  const newMyFilters = [...prev];
                  const newEntry = { value: e.target.value, property: fil.label };
                  const index = newMyFilters.findIndex(
                    (c) =>
                      c.property.toLowerCase() === newEntry.property.toLowerCase()
                  );
                  if (index === -1) {
                    return [...newMyFilters, newEntry]
                  }
                  newMyFilters[index].value = newEntry.value;
                  return newMyFilters
                });
              }}
            >
              <option value="">{fil.labelOnScreen || fil.label}</option>
              {fil.options.map((opt, pos) => 
              {
                const option = typeof opt === "string" ? {value:opt,label:opt}:opt 
                return (
                  <option key={pos} value={option.value}>
                    {option.label}
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
