const cursosVirtualesColumns=
[
    {
        name: 'COD',
        sortable: true,
        selector: (row:any)=> row.Id,
        center: true
    },
    {
        name: 'ID',
        sortable: true,
        selector: (row:any)=> row.codigo,
        center: true
    }

]

export default cursosVirtualesColumns