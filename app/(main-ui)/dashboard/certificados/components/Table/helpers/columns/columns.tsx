"use client"

import Option from "@/components/Option/Option";
import TableImg from "@/components/TableImg/TableImg";
import { faFileSignature } from "@fortawesome/free-solid-svg-icons";
import Options from "@/components/Options/Options";
import ShowingHistory from "./components/ShowingHistory/ShowingHistory";
import MyStatus from "./components/MyStatus";
import Deleting from "./components/Deleting";

const columns = 
[
  {
    name: "cod",
    selector: (row: any) => row.id,
    width:"5rem"
  },
  {
    name: "nombre",
    selector: (row: any) => row.name,
  },
  {
    name: "programa",
    selector: (row: any) => row.program,
  },
  {
    name:"Historial",
    cell:()=>(
      <div className="flex gap-[.5rem] items-center"> 
         <ShowingHistory/>
         <TableImg src="https://archivos-comunes.s3.amazonaws.com/2022/asesores/LUCERO+ALCANTARA.png" />
      </div>
    ) 
  },
  {
    name:"certificado",
    cell:()=>(
      <Option label="certificado" onClick={()=>null} icon={faFileSignature}  />
    )
  },
  {
    name:"estado",
    cell:(row:any)=><MyStatus status={row.status} />
  },
  {
    name:"fecha",
    selector:(row:any)=> row.fecha
  },
  {
    name:"acciones",
    cell:(row:any)=>(
     <Options>
       <Option label="ver" type="ver"  href={`${row.id}`} />
       <Deleting row={row} />
     </Options>
    ) 
      
  }
  
];



export default columns