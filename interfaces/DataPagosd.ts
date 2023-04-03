import DataCuotas from "./DataCuotas";
import DataEditor from "./DataEditor";

export default interface DataPagosd {
    id: number;
    fechaVoucher: string;
    medioPago: string;
    comprobante: string;
    nombre: string;
    programa: string;
    estado: string
    pago: string;
    editor: DataEditor[];
    cuotas: DataCuotas[];
}