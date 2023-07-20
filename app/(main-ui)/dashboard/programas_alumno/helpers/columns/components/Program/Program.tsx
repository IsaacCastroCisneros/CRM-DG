import React from 'react'

export default function Program({row}:any) 
{
  return (
    <div className="flex items-center gap-[.5rem]">
      <div className='w-[2rem]'>
        <img className="w-[100%]" src={row.program.img} />
      </div>
      <span>{row.program.name}</span>
    </div>
  );
}
