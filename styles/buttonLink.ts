import { twMerge } from "tailwind-merge"

export default function buttonLink(cancel=false,finish=false,disabled=false)
{
    let change = ""
    if(cancel) change='bg-[#fff] border-primary text-primary'
    if(finish) change='bg-myRed'

    const twStyle = twMerge(
      "font-bold border-[1px] capitalize rounded-[.5rem] h-[60px] px-[1rem] flex justify-center items-center w-[180px] gap-[.5rem] font-bold text-[18px] capitalize bg-primary text-[#fff] border-[transparent] my-shadow ",
      change
    );

    return twStyle
}