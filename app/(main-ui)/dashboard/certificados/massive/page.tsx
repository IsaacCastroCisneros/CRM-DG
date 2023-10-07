"use client"

import ExcelUploader from '@/components/ExcelUploader/ExcelUploader';
import MyBlock from '@/components/MyBlock/MyBlock'
import Link from 'next/link';
import React from 'react'

export default function Page() {
  return (
    <MyBlock title="Crear Certificados Masivamente">
      <div className="container mx-auto">
        <div className="w-full px-10">
          <div className="w-full bg-white px-10 py-10 mt-1 shadow-xl">
            <p className="mt-4 font-normal text-gray-500">
              Puedes importar los certificados cargando un archivo o copiandolos
              y pegandolos desde un archivo.
            </p>
            <div className="flex justify-between mt-10 gap-9 flex-wrap">
              <Link
                className="w-full text-black mx-auto xl:w-[48%] lg:w-[48%] border-dashed border-2 border-gray-600 rounded-lg flex justify-center items-center py-40 hover:bg-blue-400 hover:text-white"
                href="/dashboard/certificados/massive/copiar_pegar"
              >
                <div className="mx-3">
                  <i className="fa-solid fa-file-import fa-3x text-center w-full"></i>
                  <p className="font-medium mt-2 text-center">Copiar/pegar</p>
                  <p className="mt-2 text-center">
                    Copie y pegue los contactos desde su archivo Excel (.xls)
                  </p>
                </div>
              </Link>
              <ExcelUploader />
            </div>
          </div>
        </div>
      </div>
    </MyBlock>
  );
}
