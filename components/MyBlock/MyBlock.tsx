import React, { ReactNode } from 'react'

export default function MyBlock({title,children='',extraThick=false}:{title:string,children?:ReactNode,extraThick?:boolean}) 
{
  const styles = extraThick ? 'w-[60rem] mx-[auto] max-w-[100%]' :''

  return (
    <div className={`flex-1 ${styles}`}>
      <strong className="block mb-[1.5rem] capitalize Montserrat text-[#000] text-2xl font-black">{title}</strong>
      <section>{children}</section>
    </div>
  );
}
