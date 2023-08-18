import date from '@/interfaces/date'
import React, { Dispatch, SetStateAction } from 'react'

export default function DatePickers({setDate}:{setDate:Dispatch<SetStateAction<date>>} ) 
{
  return (
    <div className="flex gap-[.5rem]">
      <div className="flex gap-[.5rem]">
        <label className="self-center capitalize">inicio</label>
        <input
          className="my-shadow rounded-[.5rem] text-myGray3 font-medium border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer"
          type="date"
          onChange={(e) =>
            setDate((prev) => {
              return { ...prev, start: e.target.value };
            })
          }
        />
      </div>
      <div className="flex gap-[.5rem]">
        <label className="self-center capitalize">fin</label>
        <input
          className="my-shadow rounded-[.5rem] text-myGray3 font-medium border-[1px] border-myBorderDark outline-none focus:border-primary focus:text-primary px-[1rem] hover:cursor-pointer"
          type="date"
          onChange={(e) =>
            setDate((prev) => {
              return { ...prev, end: e.target.value };
            })
          }
        />
      </div>
    </div>
  );
}


