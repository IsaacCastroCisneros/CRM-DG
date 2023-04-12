import RegularPopup from '@/components/RegularPopup/RegularPopup'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'

export default function ListUser() 
{
  return (
    <RegularPopup title='Lista' content={<List/>} />
  )
}

const data=
[
    {
        nombre:'leeeel',
        type:'regalo'
    },
    {
        nombre:'hmmm',
        type:'regalo'
    }
]

function List()
{
    const columns=
    [
      {
        name:'Nombre del producto',
        selector: (row:any) => row.nombre,
      },
      {
        name:'tipo',
        selector: (row:any) => row.type,        
      }
    ]

    return(
        <TheDataTable columns={columns} data={data} />
    )
}