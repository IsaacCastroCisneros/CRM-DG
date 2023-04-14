import { Page, Document, Font } from '@react-pdf/renderer';
import { Html } from 'react-pdf-html';
import ReactDOMServer from 'react-dom/server';
Font.register({
    family: 'Open Sans',
    fonts: [
        { src: "/fuentes/NotoSansJP-Bold.otf", fontWeight: 100, fontSize: "120px" }
    ]
});
const stylesheet = {
    // clear margins for all <p> tags
    h1: {
        fontSize: "45px"
    },
    p: {
        fontSize: "11px"
    },
    ['.paddingArr']: {
        marginTop: "-8px"
    },
    ['.textCentrado']: {
        textAlign: "center",
        lineHeight: "1.3",
    },
    ['.paddingHoja2']: {
        marginTop: "15px"
    },
    ['.paddingLetras']: {
        marginTop: "-17px"
    },
    ['.sinNota']: {
        marginTop: "50px"
    },
    [".titulo"]: {
        fontSize: "54px",
        marginTop: "15px"
    },
    [".letrasTabla"]: {
        fontSize: "11px",
    },
    [".marginTopdi"]:{
        marginTop: "-9px"
    }
};
export const CertificadoDiploma = ({ data, nombre}: any) => {
    console.log(data)
    const element = (
        <div style={{ width: "100vw", height: "100vh" }}>
            <img src="/img/FontDiplomado.jpg" alt="" style={{ position: "absolute", width: "100%", height: "100%" }} />
            <div style={{ position: "absolute", transform: "translate(-50%, -50%)", left: "30%", top: "22%", width: "55%" }}>
                <h1 style={{ fontFamily: "Open Sans" }} className={`textCentrado titulo`} >DIPLOMADO</h1>
                <h5 style={{ fontFamily: "Open Sans" }} className="paddingArr textCentrado">DE NIVEL POSTGRADO</h5>
                <p style={{ fontSize: "10px" }} className="paddingArr textCentrado">Con código CCDG-45145 que se otorga a </p>
                <h5 style={{ fontFamily: "Open Sans" }} className="paddingArr textCentrado">{nombre}</h5>
                <p className="paddingArr textCentrado">En  reconocimiento  por  haber  cumplido  con  los  requisitos  académicos  exigidos  y por
                    haber aprobado satisfactoriamente el Diplomado de Nivel Postgrado, Denominado:  </p>
                <h5 style={{ fontFamily: "Open Sans" }} className="paddingArr textCentrado">{data.nombre}</h5>
                <p className="paddingArr textCentrado">Realizado desde el 25/06/2022 al 25/01/2023, con una duración total de 384 horas lectivas y 24 créditos académicos. Dado y firmado en la ciudad de Lima, a los 25 días de enero de 2023.  </p>
            </div>
        </div>

    );
    const element2 = (
        <div style={{ width: "100vw", height: "100vh" }}>
            <div style={{ position: "absolute", transform: "translate(-50%, -50%)", left: "24.5%", top: "20%", width: "66%" }}>
                <p className='textCentrado'>DIPLOMADO DE NIVEL POST GRADO</p>
                <p className='textCentrado marginTopdi' style={{ textTransform: "uppercase" }}>GESTIÓN Y ADMINISTRACIÓN PÚBLICA</p>

                <div style={{ display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center"}}>
                    <div style={{width: "13%", borderRight: "1px solid black", fontSize: "11px", paddingTop: "5px", paddingBottom: "5px", textAlign: "center"}}>MÓDULO</div>
                    <div style={{width: "100%", fontSize: "11px", paddingTop: "5px", paddingBottom: "5px", textAlign: "center"}}>CONTENIDO</div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center", borderTop: "none"}}>
                    <div style={{width: "13%", borderRight: "1px solid black", fontSize: "11px", paddingTop: "5px", paddingBottom: "5px", textAlign: "center"}}>I</div>
                    <div style={{width: "100%", fontSize: "11px", paddingTop: "5px", paddingBottom: "5px", textAlign: "center", paddingLeft: "15px", paddingRight: "15px"}}>GESTIÓN DE BIENES PATRIMONIALES</div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center", borderTop: "none"}}>
                    <div style={{width: "13%", height: "100%", borderRight: "1px solid black", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px"}}>II</div>
                    <div style={{width: "100%", fontSize: "11px", textAlign: "center", paddingLeft: "15px", paddingRight: "15px"}}>ELABORACIÓN DE INSTRUMENTOS DE GESTIÓN DEL PLANEAMIENTO ESTRATÉGICO Y OPERATIVO: PEI Y POI</div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center", borderTop: "none"}}>
                    <div style={{width: "13%", height: "100%", borderRight: "1px solid black", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px"}}>III</div>
                    <div style={{width: "100%", fontSize: "11px", textAlign: "center", paddingLeft: "15px", paddingRight: "15px"}}>SISTEMA INTEGRADO DE ADMINISTRACIÓN FINANCIERA SIAF RP - NIVEL BÁSICO, INTERMEDIO Y AVANZADO</div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center", borderTop: "none"}}>
                    <div style={{width: "13%", height: "100%", borderRight: "1px solid black", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px"}}>IV</div>
                    <div style={{width: "100%", fontSize: "11px", textAlign: "center", paddingLeft: "15px", paddingRight: "15px"}}>FORMULACIÓN Y EVALUACIÓN DE PROYECTOS DE INVERSIÓN PÚBLICA</div>
                </div>

                <div style={{ display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center", borderTop: "none"}}>
                    <div style={{width: "13%", height: "100%", borderRight: "1px solid black", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px"}}>V</div>
                    <div style={{width: "100%", fontSize: "11px", textAlign: "center", paddingLeft: "10px   ", paddingRight: "10px "}}>SISTEMA INTEGRADO DE GESTIÓN ADMINISTRATIVA - SIGA MEF MÓDULO DE PATRIMONIO Y DE TESORERÍA</div>
                </div>


                <h6 style={{ fontFamily: "Open Sans" }} className="textCentrado paddingHoja2">PROMEDIO</h6>
                <table style={{ width: "180px", margin: "0 auto" }} className="paddingLetras">
                    <tr style={{ border: "1px solid black" }}>
                        <td style={{ borderRight: "1px solid black", fontFamily: "Open Sans", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px" }}>NOTA</td>
                        <td style={{ fontFamily: "Open Sans", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px" }}>{data.promedio} (VEINTE)</td>
                    </tr>
                </table>

                <p className='textCentrado'>DURACIÓN: 07 MESES, 384 HORAS Y 24 CRÉDITOS</p>
                <p className='textCentrado paddingLetras'>Fecha de Inicio: 25 de junio de 2022</p>
                <p className='textCentrado paddingLetras'>Fecha de Inicio: 25 de junio de 2022</p>

                <img src="/img/qr.jpg" alt="" style={{ margin: "0 auto", width: "100px" }} />
            </div>
        </div>
    )
    const html = ReactDOMServer.renderToStaticMarkup(element);
    const html2 = ReactDOMServer.renderToStaticMarkup(element2);
    return (
        <>
            <Document>
                <Page size="A4" orientation="landscape">
                    <Html stylesheet={stylesheet}>{html}</Html>
                </Page>
                <Page size="A4" orientation="landscape">
                    <Html stylesheet={stylesheet}>{html2}</Html>
                </Page>
            </Document>
        </>
    )
}