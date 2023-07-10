export default function buttonLink(cancel=false)
{
    return `font-semibold text-[16px] text-[#fff] ${cancel ? 'bg-myGray':'bg-primary'} capitalize rounded-[.5rem] h-[60px] px-[1rem] flex justify-center items-center w-[180px] gap-[.5rem] font-bold text-[18px] capitalize`
}