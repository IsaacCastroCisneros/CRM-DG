'use client'

import React, { useContext } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { appContext } from '@/context/AppContenxt'

export default function UserMenuDashsBoard() 
{
    const [subMenu, setSubMenu] = useState<boolean>(false)
    const{user}=useContext(appContext)

    const AbrirMenu = () => {
      setSubMenu(!subMenu);
    }

  return (
    <div className="w-[260px] mob:hidden">
      <div className="bg-bg-fondonav p-5 bg-no-repeat">
        <img
          src={user?.avatar}
          alt=""
          className="w-12 rounded-full mx-auto mt-4"
        />
        <h3 className="text-dark text-center font-medium mt-3">{user?.nombre}</h3>
        <h4 className="text-center">{user?.correo}</h4>
      </div>
      <div className="mb-5 space-y-2 px-6">
        <h4 className="text-gray-500 font-medium mb-5 text-xs">NAVEGACION</h4>
        <Link
          href="/"
          className="bg-white text-dark py-2 rounded-md text-base font-medium flex items-center gap-3 px-2"
        >
          {" "}
          <i className="fa-solid fa-house"></i>DASHBOARD
        </Link>
        <button
          className="bg-white text-dark py-2 rounded-md text-base font-medium flex items-center gap-3 w-full px-2 h-full"
          onClick={AbrirMenu}
        >
          <i className="fa-solid fa-certificate"></i>CERTIFICADOS
        </button>

        {subMenu && (
          <div className="transition">
            <Link
              href="/certificados"
              className="mx-9 w-10/12 block py-2"
            >
              Ver Certificados
            </Link>
            <a href="/certificados/new" className="mx-9 w-10/12 block py-2">
              Crear Certificados
            </a>
            <a href="" className="mx-9 w-10/12 block py-2">
              Editar Certificados
            </a>
          </div>
        )}

        <a
          href="#"
          className="bg-white text-dark py-2 rounded-md text-base font-medium flex items-center gap-3 w-full px-2 h-full"
        >
          <i className="fa-solid fa-money-bill"></i>PAGOS
        </a>
        <a
          href="#"
          className="bg-white text-dark block px-3 py-2 rounded-md text-base font-medium"
        >
          PROSPECTOS
        </a>
        <a
          href="#"
          className="bg-white text-dark block px-3 py-2 rounded-md text-base font-medium"
        >
          ENVIOS
        </a>
        <a
          href="#"
          className="bg-white text-dark block px-3 py-2 rounded-md text-base font-medium"
        >
          PENDIENTES
        </a>
        <a
          href="#"
          className="bg-white text-dark block px-3 py-2 rounded-md text-base font-medium"
        >
          USUARIOS
        </a>
      </div>
    </div>
  );
}
