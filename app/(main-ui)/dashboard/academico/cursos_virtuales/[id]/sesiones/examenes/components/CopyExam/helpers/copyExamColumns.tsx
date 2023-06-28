import { MyButtonLink } from "@/components/MyButtonLink/MyButtonLink";


function copyExamColumns(label:string)
{
  
  return [
    {
      name: "id",
      selector: (row: any) => row.id,
    },
    {
      name:"titulo",
      selector:(row:any)=>row.title
    },
    {
      name:"options",
      cell:()=><MyButtonLink label={label} onClick={()=>null}/>
    }
  ]
} 


export default copyExamColumns