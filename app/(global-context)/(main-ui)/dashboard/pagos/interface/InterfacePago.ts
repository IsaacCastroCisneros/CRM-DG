export interface PagosInter {
    menu: DataPagosd[];
}

export interface DataPagosd {
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

interface DataEditor{
    id: number,
    nombre: string,
    fecha: string,
    foto: string  
}


export interface DataCuotas {
    id: number;
    monto: number;
    medio: string;
    numeroComprobante: string,
    estado: string;
    fechaVencimiento: string
}
