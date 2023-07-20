import { twMerge } from "tailwind-merge"

type status ="entregado"|"oficina"|"aula virtual"|"olva"|"pendiente"

export default function MyStatus({status}:{status:status})
{
  const myStatus = {label:status,styles:""}

  if(status==="entregado") myStatus.styles="bg-myGreen"
  if(status==="aula virtual") myStatus.styles="bg-[#fff] border-[1px] border-myBorder text-myBlack"
  if(status==="olva") myStatus.styles="bg-myYellow"
  if(status==="pendiente") myStatus.styles="bg-myRed"
  if(status==="oficina") myStatus.styles="bg-primary"

   return(
     <div className={twMerge(`text-[#fff] px-[1rem] py-[.6rem] w-[8rem] flex justify-center font-bold rounded-[.3rem]`,myStatus.styles) } >
        {
          myStatus.label
        }
     </div>
   )
}