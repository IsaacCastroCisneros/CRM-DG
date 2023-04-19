"use client"
import { Popover, Transition } from "@headlessui/react"
import { PDFDownloadLink,Document,Page,Text } from "@react-pdf/renderer"
import { Fragment } from "react"
import { CertificadoCurso } from "./CertificadoCurso"
import { CertificadoDiploma } from "./CertificadoDiploma"


export const BtnAcciones = ({ data, buscarData, tipo }: any) => {

    return (
      <>
        <Popover className="relative">
          {({ open }) => (
            <>
              {tipo === "Curso" ? (
                <Popover.Button className="bg-green-500 p-2 text-white rounded-md">
                  <span>Descargar</span>
                </Popover.Button>
              ) : (
                <PDFDownloadLink
                  document={
                    <CertificadoDiploma
                      data={data}
                      nombre={buscarData?.nombre}
                    />
                  }
                  fileName={`${buscarData?.nombre}`}
                >
                  <button className="bg-green-500 p-2 text-white rounded-md">
                    Descargar
                  </button>
                </PDFDownloadLink>
              )}
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="fixed z-10 w-auto -translate-x-1/2 transform px-4 sm:px-0">
                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="bg-gray-50 p-4 flex gap-2">
                    <PDFDownloadLink
                        document={
                          <CertificadoCurso
                            data={data}
                            nombre={buscarData?.nombre}
                            tipo={"nota"}
                          />
                        }
                        fileName={`${buscarData?.nombre}`}
                      >
                        <button className="p-2 bg-blue-500 text-white rounded-md font-bold">
                          CON NOTA
                        </button>
                      </PDFDownloadLink>
                      <PDFDownloadLink
                        document={
                          <CertificadoCurso
                            data={data}
                            nombre={buscarData?.nombre}
                            tipo={"sinNota"}
                          />
                        }
                        fileName={`${buscarData?.nombre}`}
                      >
                        <button className="p-2 bg-red-500 text-white rounded-md font-bold">
                          SIN NOTA
                        </button>
                      </PDFDownloadLink>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </>
    );
}