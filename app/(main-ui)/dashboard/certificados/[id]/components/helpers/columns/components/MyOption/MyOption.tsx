"use client"

import Option from '@/components/Option/Option';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import React, {ReactElement} from 'react'
import { CertificadoCurso } from './components/CertificadoCurso';
import Options from '@/components/Options/Options';
import dynamic from 'next/dynamic';
import { CertificadoDiploma } from './components/CertificadoDiploma';


const PDFDownloadLink = dynamic(() => import('@react-pdf/renderer').then((module) => module.PDFDownloadLink),
{
  ssr: false,
})

interface props
{
    isPass:"aprobado"|"desaprobado"
    data:Record<any,any>
}

export default function MyOption({isPass,data}:props)
{

   if(isPass==="aprobado")
   {
       return(
        <PDFDownloadLink document={gettingCertificate(data,"nota")} fileName='Jessica Perez'>
          <Option label="Descargar" styles="text-[.8rem]" icon={faDownload} onClick={()=>null} />
        </PDFDownloadLink>
       )
   }

   return (
     <Options>
       <PDFDownloadLink
         document={gettingCertificate(data,"nota")}
         fileName="Jessica Perez"
       >
         <Option label='con nota' styles="text-[.8rem]"  icon={faDownload} hoverMsg={false} onClick={()=>null} />
       </PDFDownloadLink>
       <PDFDownloadLink
         document={gettingCertificate(data,"sinNota")}
         fileName="Jessica Perez"
       >
          <Option label='sin nota'styles="text-[.8rem]" icon={faDownload} hoverMsg={false} onClick={()=>null} />
       </PDFDownloadLink>
     </Options>
   );
}

function gettingCertificate(data:any,nota:string,name:string='Jessica Perez'):ReactElement
{
  const type = data.type.toLowerCase()


  if(type==="curso")
  {
    return (
      <CertificadoCurso  data={data} nombre={name} tipo={nota} />
    ) 
  }
  if(type==="diploma")
  {
    return(
      <CertificadoDiploma data={data} nombre={name} tipo={nota} />
    )
  }

  return <></>
}