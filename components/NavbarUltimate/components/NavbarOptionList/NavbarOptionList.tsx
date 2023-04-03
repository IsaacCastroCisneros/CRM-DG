'use client'

import React,{useState} from 'react'
import NavbarOption from './components/NavbarOption';
import { faHouse,faFolder,faChartPie,faDollar, faPaperPlane, faRotateRight, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

export default function NavbarOptionList() 
{
  const path = usePathname()
  const[show,setShow]=useState({show:false,isSelected:0,pipeBar:path==='/'?'dashboard':path?.split('/')[1]})

  const optionList =
  [
    {
      href:'/',
      label:"dashboard",
      icon:faHouse,
    },
    {
      href:'/prospectos',
      label:"prospectos",
      icon:faFolder,
      list:[
        {
          label:'Prospectos',
          href:'/prospectos'
        },
        {
          label:'Elegir Criterio de Busqueda',
          href:'/prospectos/search'
        }
      ]
    },
    {
      href:'/certificados',
      label:"certificados",
      icon:faChartPie,
      list:
      [
        {
          label:"Nuevo Certificado",
          href:"/certificados/new"
        }
      ]
    },
    {
      href:'/pagos',
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
      href:'/envios',
      label:"Envios",
      icon:faPaperPlane,
    },
    {
      href:'/pendientes',
      label:"pendientes",
      icon:faRotateRight,
    },
    {
      href:'/users',
      label:"usuarios",
      icon:faUser,
    },
    {
      href:'/email',
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
