'use client'

import React,{useState} from 'react'
import NavbarOption from './components/NavbarOption';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function NavbarOptionList() 
{
  const path = usePathname()
  const[show,setShow]=useState({show:false,isSelected:0,pipeBar:path==='/dashboard'?'dashboard':path?.split('/')[2]})

  const optionList =
  [
    {
      href:'/dashboard',
      label:"dashboard",
      icon:faHouse,
    },
    {
      href:'/dashboard/prospectos',
      label:"prospectos",
      icon:faFolder,
      list:[
        {
          label:'Prospectos',
          href:'/dashboard/prospectos'
        },
        {
          label:'Elegir Criterio de Busqueda',
          href:'/dashboard/prospectos/search'
        }
      ]
    },
    {
      href:'/dashboard/certificados',
      label:"certificados",
      icon:faChartPie,
      list:
      [
        {
          label:"Nuevo Certificado",
          href:"/dashboard/certificados/new"
        }
      ]
    },
    {
      href:'/dashboard/pagos',
      label:"pagos",
      icon:faDollar,
      list:
      [
        {
          label:"Nuevo pago",
          href:"/pagos/new"
        }
      ]
    },
    {
      href:'/dashboard/envios',
      label:"Envios",
      icon:faPaperPlane,
    },
    {
      href:'/dashboard/pendientes',
      label:"pendientes",
      icon:faRotateRight,
    },
    {
      href:'/dashboard/usuarios',
      label:"usuarios",
      icon:faUser,
    },
    {
      href:'/dashboard/email',
      label:"email",
      icon:faEnvelope,
    },
  ]

  return (
    <>
      {
        optionList.map((opt,pos)=>
          {
            return (
              <NavbarOption
                key={pos}
                id={pos}
                show={show}
                setShow={setShow}
                {...opt}
              />
            );
          })
      }
    </>
  );
}
