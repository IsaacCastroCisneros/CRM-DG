import React from 'react'
import Link from 'next/link';
import submenu from '@/interfaces/submenu';

export const HoverMenu = ({
  isHover,
  submenu,
  title,
}: {
  isHover: boolean;
  submenu: Array<submenu>;
  title: string;
}) => 
{
  return (
    <div
      className="w-[12rem] absolute right-0 duration-[300ms] ease-in-out top-0 pl-[.5rem] overflow-hidden"
      style={{
        opacity: isHover ? "1" : "0",
        transform: isHover ? "translateX(calc(100%))" : "translateX(0)",
        pointerEvents: isHover ? "auto" : "none",
      }}
    >
      <ul className="flex flex-col bg-[#30394c] rounded-[.5rem] overflow-hidden">
        <li className="w-[100%]">
          <strong className="block py-[.3rem] px-[1rem] border-b-[1px] border-slate-400">
            {title}
          </strong>
        </li>
        {submenu && submenu.map((s, pos) => <MyLink {...s} key={pos} />)}
      </ul>
    </div>
  );
};

function MyLink(props:submenu)
{
    const{label,href}=props

    return (
      <Link
        href={href}
        className="w-[100%] py-[.3rem] px-[1rem] hover:bg-primary"
      >
        {label}
      </Link>
    );
}

