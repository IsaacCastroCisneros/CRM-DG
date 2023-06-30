import React, { ReactNode } from 'react'

export const InputGroup = ({children,title}:{children:ReactNode,title:string}) => 
{
  return (
    <div className="w-[100%]">
      <span className="block border-b-[1px] border-gray-200 capitalize mb-[1.5rem]">
        <p className="block px-[2rem] text-[1.4rem]">{title}</p>
      </span>
      <div className="px-[2rem]">{children}</div>
    </div>
  );
}
