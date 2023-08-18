import item from "@/components/CustomSelector/interfaces/item"
import typeProgram from "./typeProgram"

export default interface program
{
    step:number,
    type:typeProgram,
    nombreDelProgram:string,
    modalidad:'envivo'|'grabado'|'texto'|'',
    nivel:'basico'|'intermedio'|'avanzado'|'',
    categorias:string,
    subtitulo:string,
    descripcionDelProgram:string,
    tipoDescuento:''|'fixed'|'porcentaje'
    quienesDebenParticipar:string,
    queAprendere:string,
    marcarComoPrivado:boolean,
    programEsGratuito:boolean,
    descuento:boolean,
    destacado:boolean,
    vistaPrevia:boolean,
    pagoRequerido:boolean,
    precioDeProgram:string,
    descuentoPrecio:string,
    categoriaDeProgram:Array<item>,
    fechaDeInicioDelProgram:string,
    fechaDeFinalizacionDelProgram:string,
    cierreDeinscripciones:Array<string>,
    instructoresDelProgram:Array<item>,
    activarVideoEnLandingPage:boolean,
    seleccionarVideoParaLanding:string,
    codigoDeVideoUrl:string,
    cardsPaginaPrincipal:string,
    fondoParaLandingPage:string,
    iconoDelProgram:string,
    bannerPromocional:string,
    responsablesMarketing:Array<item>,
    responsablesAsesoria:Array<item>,
    meta:Array<item>,
    metaDescripcion:string,
    cursos:Array<item> 
    metaImagen:string
}