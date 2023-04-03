import React from 'react'

interface props
{
    label:string|undefined,
    initial?:string|undefined,
    active?:string|undefined,
    isHover:boolean|undefined,
    styles?:string|undefined,
    type?:'down-to-up'|undefined
}

export default function HoverMsg(props:props) 
{
  let { label, initial, active, isHover ,styles,type } = props;

  if(type==='down-to-up')
  {
    initial='translate-y-[-60%] opacity-0';
    active='translate-y-[-100%] opacity-1';
    styles='top-0 translate-x-[-50%] left-[50%]';
  }

  return (
    <span
      className={`capitalize absolute ${styles} transition-all duration-200 text-[#fff] bg-[#30394c] py-[.2rem] px-[.4rem] w-fit whitespace-nowrap text-[.8rem] pointer-events-none rounded-[.3rem] z-[9999] ${
        isHover ? active : initial
      }`}
    >
      {label}
    </span>
  );
}
