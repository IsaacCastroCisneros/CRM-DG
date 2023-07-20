"use client"

import MyOption from "./components/MyOption/MyOption";

const columns = 
[
    {
        name:"cod",
        selector:(row:any)=>row.cod
    },
    {
        name:"nombre",
        selector:(row:any)=>row.name
    },
    {
        name:"tipo",
        selector:(row:any)=>row.type
    },
    {
        name:"estado",
        cell:(row:any)=>row.status
    },
    {
        name:"promedio",
        selector:(row:any)=>row.average
    },
    {
        name:"acciones",
        cell:(row:any)=><MyOption data={row} isPass={row.status} />
    }

]

export default columns