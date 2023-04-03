import React from 'react'

export default function MyBlock({title,children=''}:{title:string,children?:JSX.Element|string}) 
{
  return (
    <div className='flex-1'>
      <strong className="block mb-[1.5rem] capitalize Montserrat text-[#000] text-2xl font-black">{title}</strong>
      <div>{children}</div>
    </div>
  );
}
