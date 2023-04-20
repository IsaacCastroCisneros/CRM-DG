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
                  <div className="bg-gray-50 flex gap-2">
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
            </>
          )}
        </Popover>
      </>
    );
}