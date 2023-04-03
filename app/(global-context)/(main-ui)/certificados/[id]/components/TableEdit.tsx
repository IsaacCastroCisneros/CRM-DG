import { LoadingComponent } from '@/components/LoadingComponent/LoadingComponent';
import { DataCertificados } from '@/helpers/DataCertificados';
import { useLoading } from '@/hooks/useLoading';
import DataTable, { TableColumn } from 'react-data-table-component';
import { certificadoEdit } from '../interface/detallesEdit';
import { BtnAcciones } from './BtnAcciones';
export default function TableEdit({ id }: any) {
    const buscarData = DataCertificados.find((valor) => valor.Id == id)
    const columns: TableColumn<certificadoEdit>[] = [
        {
            name: 'ID',
            sortable: true,
            selector: row => row.id,
            center: true,
        },
        {
            name: 'NOMBRE',
            sortable: true,
            selector: row => row.nombre,
            center: true
        },
        {
            name: 'TIPO',
            sortable: true,
            selector: row => row.tipo,
            center: true
        },
        {
            name: 'ESTADO',
            sortable: true,
            selector: row => row.estado,
            center: true,
            style: {
                fontSize: "15px",
                margin: "4px",
                borderRadius: "50px",
                fontWeight: "bold"
            },
            conditionalCellStyles: [
                {
                    when: row => row.estado === "APROBADO",
                    style: {
                        color: "#4AD69D",
                        border: "2px solid #4AD69D"
                    }
                }, {
                    when: row => row.estado === "DESAPROBADO",
                    style: {
                        color: "red",
                        border: "2px solid red"
                    }
                }
            ]
        },
        {
            name: 'PROMEDIO',
            sortable: true,
            cell: row => row.promedio,
            center: true,
        },
        {
            name: 'ACCIONES',
            sortable: true,
            cell: (row) => <BtnAcciones data={row} buscarData={buscarData} tipo={row.tipo}  />,
            center: true
        },
    
    ];
    const [pending] = useLoading(buscarData)
    return (
        <>
            <DataTable
                columns={columns}
                data={buscarData!.details}
                pagination
                highlightOnHover
                progressPending={pending}
                progressComponent={<LoadingComponent />}
            />
        </>
    )
}