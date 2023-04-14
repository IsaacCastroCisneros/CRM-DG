import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
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
        lineHeight: "1.3"
    },
    ['.paddingHoja2']: {
        marginTop: "-14px"
    },
    ['.paddingLetras']: {
        marginTop: "-17px"
    },
    ['.sinNota']: {
        marginTop: "50px"
    }
};
export const CertificadoCurso = ({ data, nombre, tipo }: any) => {
    const element = (
        <div style={{ width: "100vw", height: "100vh" }}>
            {
                tipo === "nota" ? (
                    <img src="/img/fontCerti.png" alt="" style={{ position: "absolute", width: "100%", height: "100%" }} />
                ) : (
                    <img src="/img/fontCertiSinNota.png" alt="" style={{ position: "absolute", width: "100%", height: "100%" }} />
                )
            }
            <div style={{ position: "absolute", transform: "translate(-50%, -50%)", left: "31%", top: "22%", width: "50%" }}>
                <h1 style={{ fontFamily: "Open Sans" }} className={`textCentrado ${tipo === "sinNota" && "sinNota"}`} >CERTIFICADO</h1>
          {/*       <p style={{ fontSize: "10px" }} className="paddingArr textCentrado">Con código CCDG-45145 que se otorga a </p>
                <h5 style={{ fontFamily: "Open Sans" }} className="paddingArr textCentrado">{nombre}</h5>
                <p className="paddingArr textCentrado">En reconocimiento por haber cumplido con los requisitos académicos exigidos  y por haber aprobado satisfactoriamente el Curso Especializado, Denominado: </p>
                <h5 style={{ fontFamily: "Open Sans" }} className="paddingArr textCentrado">{data.nombre}</h5>
                <p className="paddingArr textCentrado">Realizado desde el 15/02/2023 al 25/02/2023, con una duración total de 60 horas lectivas. Dado y firmado en la ciudad de Lima, a los 25 días de febrero del año 2023. </p> */}
            </div>
        </div>

    );
    const element2 = (
        <div style={{ width: "100vw", height: "100vh" }}>
            <div style={{ position: "absolute", transform: "translate(-50%, -50%)", left: "36%", top: "30%", width: "40%" }}>
                <p className='textCentrado'>Curso Especializado</p>
                <p className='textCentrado paddingHoja2' style={{ textTransform: "uppercase" }}>{data.nombre}</p>
                {
                    tipo === "nota" ? (
                        <>
                            <h6 style={{ fontFamily: "Open Sans" }} className="textCentrado paddingHoja2">PROMEDIO</h6>
                            <table style={{ width: "180px", margin: "0 auto" }} className="paddingLetras">
                                <tr style={{ border: "1px solid black" }}>
                                    <td style={{ borderRight: "1px solid black", fontFamily: "Open Sans", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px" }}>NOTA</td>
                                    <td style={{ fontFamily: "Open Sans", fontSize: "11px", textAlign: "center", paddingTop: "5px", paddingBottom: "5px" }}>{data.promedio}</td>
                                </tr>
                            </table>
                        </>
                    ) : (<><br></br><br></br></>)
                }
                <p className='textCentrado '>CENTRO DE CAPACITACIÓN Y DESARROLLO GLOBAL</p>
                <p className='textCentrado paddingLetras'>RUC: 20544396791</p>
                <p className='textCentrado '>La Secretaría Académica que suscribe: certifica que el certificado Nº 45145, ha sido inscrito en el registro de certificaciones en la ciudad de Lima, a los 25 días del mes de febrero del año 2023.</p>
                <img src="/img/qr.jpg" alt="" style={{ margin: "0 auto", width: "100px" }} />
            </div>
        </div>
    )
    const html = ReactDOMServer.renderToStaticMarkup(element);
    const html2 = ReactDOMServer.renderToStaticMarkup(element);

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