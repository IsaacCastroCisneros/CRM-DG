import filter from '@/interfaces/filter';
import React,{Dispatch, SetStateAction} from 'react'

interface myFilter
{
  label:string,
  options:Array<string>
}

interface props
{
  setMyFilter: Dispatch<SetStateAction<Array<filter>>>;
  filters: Array<myFilter>;
  myFilters:Array<filter>
}

export default function MyFilters({setMyFilter,filters,myFilters}:props) 
{
  return (
    <>
      {filters.map((fil, pos) => {
        return (
          <div className="flex" key={pos}>
            <select
              className="my-shadow rounded-[.5rem] text-myGray3 font-medium border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer capitalize"
              onChange={(e) =>
                {
                  const newMyFilters =[...myFilters]
                  const newEntry = { value: e.target.value, property: fil.label }
                  const index = newMyFilters.findIndex(c=> c.property.toLowerCase()===newEntry.property.toLowerCase())
                  if(index===-1)
                  {
                    setMyFilter([...newMyFilters,newEntry])
                    return
                  }
                  newMyFilters[index].value=newEntry.value
                  setMyFilter(newMyFilters)
                }
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
