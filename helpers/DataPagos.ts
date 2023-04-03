import { DataPagosd } from "@/app/dashboard/pagos/interface/InterfacePago";


export const DataPagos:Array<DataPagosd> = [
    {
        id: 20,
        editor: [{
            id: 13,
            nombre: "Luz Maria",
            fecha: "17/02/2023",
            foto: "https://archivos-comunes.s3.amazonaws.com/2019/profesores/docente_stefany_mimbela.jpg",
        }],
        fechaVoucher: "20/02/2023", 
        medioPago: "YAPE",
        comprobante: "BOLETA",
        nombre: "Martin Rios Tineo",
        programa: "PLANEAMIENTO Y PRESUPUESTO EN LA GESTION PUBLICA",
        estado: "PAGADO",
        pago: "1000",
        cuotas: [{
            id: 1,
            monto: 200,
            medio: "YAPE",
            numeroComprobante: "465456465",
            estado: "Realizado",
            fechaVencimiento: "21/02/2023"
        }, {
            id: 2,
            monto: 300,
            medio: "YAPE",
            numeroComprobante: "",
            estado: "Pendiente",
            fechaVencimiento: "21/03/2023"
        }]
    },
    {
        id: 10,
        editor: [{
            id: 18,
            nombre: "David Martinez",
            fecha: "09/02/2023",
            foto: "https://archivos-comunes.s3.amazonaws.com/2019/profesores/docente_stefany_mimbela.jpg",
        }],
        fechaVoucher: "09/02/2023",
        medioPago: "TRANSFERENCIA",
        programa: "PLANEAMIENTO Y PRESUPUESTO EN LA GESTION PUBLICA",
        comprobante: "FACTURA",
        nombre: "Angie Madueño",
        estado: "DEUDOR",
        pago: "2000",
        cuotas: [{
            id: 1,
            monto: 200,
            medio: "Interbank",
            numeroComprobante: "",
            estado: "Pendiente",
            fechaVencimiento: "19/02/2023"
        }, {
            id: 2,
            monto: 300,
            medio: "Interbank",
            numeroComprobante: "",
            estado: "Pendiente",
            fechaVencimiento: "19/03/2023"
        }]
    },
    {
        id: 15,
        editor: [{
            id: 11,
            nombre: "Issac Castro",
            fecha: "13/02/2023",
            foto: "https://archivos-comunes.s3.amazonaws.com/2019/profesores/docente_stefany_mimbela.jpg",
        }],
        fechaVoucher: "07/02/2023",
        medioPago: "PENDIENTE",
        comprobante: "BOLETA",
        nombre: "JeanPiere Alguilar",
        programa: "PLANEAMIENTO Y PRESUPUESTO EN LA GESTION PUBLICA",
        estado: "PAGADO",
        pago: "3000",
        cuotas: [{
            id: 1,
            monto: 200,
            medio: "PLIN",
            numeroComprobante: "5954564",
            estado: "Realizado",
            fechaVencimiento: "25/02/2023"
        }, {
            id: 2,
            monto: 300,
            medio: "PLIN",
            numeroComprobante: "5954564",
            estado: "Realizado",
            fechaVencimiento: "25/03/2023"
        }]
    },
    {
        id: 25,
        editor: [{
            id: 5,
            nombre: "Pilar Rengifo",
            fecha: "01/02/2023",
            foto: "https://archivos-comunes.s3.amazonaws.com/2019/profesores/docente_stefany_mimbela.jpg",
        }],
        fechaVoucher: "17/01/2023",
        medioPago: "BCP",
        comprobante: "BOLETA",
        nombre: "Don Will",
        programa: "PLANEAMIENTO Y PRESUPUESTO EN LA GESTION PUBLICA",
        estado: "PAGADO",
        pago: "1500",
        cuotas: [{
            id: 1,
            monto: 200,
            medio: "BCP",
            numeroComprobante: "5954564",
            estado: "Realizado",
            fechaVencimiento: "30/02/2023"
        }, {
            id: 2,
            monto: 300,
            medio: "BCP",
            numeroComprobante: "5954564",
            estado: "Realizado",
            fechaVencimiento: "30/03/2023"
        }]
    },
    {
        id: 50,
        editor: [{
            id: 15,
            nombre: "Sheyla Castañeda",
            fecha: "03/02/2023",
            foto: "https://archivos-comunes.s3.amazonaws.com/2019/profesores/docente_stefany_mimbela.jpg",
        }],
        fechaVoucher: "30/01/2023",
        medioPago: "BCP",
        comprobante: "FACTURA",
        nombre: "Alejandro Rios",
        estado: "PENDIENTE",
        programa: "PLANEAMIENTO Y PRESUPUESTO EN LA GESTION PUBLICA",
        pago: "400",
        cuotas: [{
            id: 1,
            monto: 200,
            medio: "BBVA",
            numeroComprobante: "",
            estado: "Pendiente",
            fechaVencimiento: "28/02/2023"
        }, {
            id: 2,
            monto: 300,
            medio: "BBVA",
            numeroComprobante: "",
            estado: "Pendiente",
            fechaVencimiento: "28/03/2023"
        },
        {
            id: 3,
            monto: 400,
            medio: "BBVA",
            numeroComprobante: "",
            estado: "Pendiente",
            fechaVencimiento: "28/04/2023"
        }
        ]
    }
]