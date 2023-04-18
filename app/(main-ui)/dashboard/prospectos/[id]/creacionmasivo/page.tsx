"use client";

import { useRouter } from "next/navigation";
import { useState } from 'react';


const Creacionmasivo=({ params }: any)=> 
{
    const dataArmad: any = []
    const [valores, setValores] = useState<any[]>([])
    const [datosUsar, setDatosUsar] = useState<any[]>([]);
    const router = useRouter();

    const captura = (e: any) => {
        e.preventDefault();
        const excel = e.target.excel.value.split("\n");
        let datosArray: any = []
        let buenas: any
        for (let i = 1; i < excel.length; i++) {
            buenas = excel[i].split("\t")
            const object = buenas.reduce((acc: any, item: any, index: any) => {
                acc['valor' + index] = item
                return acc
            }, {})
            datosArray.push(object)
        }

        let hola = {
            cabecera: excel[0].split("\t"),
            datos: datosArray
        }

        dataArmad.push(hola)
        console.log("Datos USar", dataArmad)
        setDatosUsar(dataArmad)


        setValores(dataArmad[0]?.datos?.map((valor: any) => { return Object.values(valor) }))
        console.log("Soy el Valor del IF", valores)

    };
    return (
      <>
        <div className="container mx-auto">
          <div className="w-full px-10">
            <div className="w-full bg-white px-10 py-10 mt-1">
              <div className="flex justify-between items-center">
                <h2 className="text-gray-400 font-semibold text-2xl">
                  Copiar y Pegar
                </h2>
                <button className="flex items-center gap-2 text-blue-500 font-medium"
                 onClick={()=>router.back()}
                 >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  Regresar
                </button>
              </div>
              <div>
                <p className="font-medium mt-5 text-xl">
                  1 - Importe sus datos
                </p>
                <p className="mt-2">
                  Copie y pegue sus contactos desde un archivo.
                </p>
                <form onSubmit={(e) => captura(e)} className="mt-3 w-full">
                  <textarea
                    name=""
                    id="excel"
                    className="w-full border-gray-400  border-2 h-25 p-5 rounded-xl"
                    placeholder="Martin martin@hotmail.com Fisica Juan"
                    rows={12}
                  ></textarea>
                  <button className="bg-blue-500 text-white py-3 px-5 rounded-lg font-medium mx-auto block mt-5">
                    Verificar Datos
                  </button>
                </form>
              </div>
              <div className="mt-5">
                {datosUsar.length > 0 && (
                  <table className="border-collapse border border-slate-500 w-full border-spacing-2">
                    <thead className="bg-blue-300  font-semibold text-xl">
                      <tr className="border border-slate-600 text-center">
                        {datosUsar.map((titu: any) =>
                          titu.cabecera?.map((msa: any) => (
                            <td key={msa}>{msa}</td>
                          ))
                        )}
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {valores.length > 0 &&
                        valores.map((valor) => (
                          <tr key={valor}>
                            {valor.map((mostrar: any) => (
                              <td className="p-2" key={mostrar}>
                                {mostrar}
                              </td>
                            ))}
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Creacionmasivo