import React, { ReactNode } from 'react'

export const InputGroup = ({children,title}:{children:ReactNode,title:string}) => 
{
  return (
    <div className="w-[100%] mb-[2.5rem]">
      <p className="block capitalize mb-[1.5rem] text-myGray font-bold text-[32px]">
        {title}
      </p>
      {children}
    </div>
  );
}
