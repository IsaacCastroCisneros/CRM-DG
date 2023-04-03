import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import * as XLSX from 'xlsx'

interface excel
{
  err:boolean;
  data:any
  info:File|undefined
}

export default function ExcelUploader() 
{ 
    const[excel,setExcel]=useState<excel>({err:false,data:undefined,info:undefined})

    const types=
    [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv'
    ]

    function gettinExcel(e:React.ChangeEvent<HTMLInputElement>)
    {
      const isFile= e.target.files
      if(isFile===null||isFile.length===0)return
      const file = isFile[0]

      const isType= types.some(typ=>
        {
          return typ===file.type
        })

      if(!isType)return setExcel(prev=>{return{...prev,err:true}})

      const promise = new Promise((resolve, reject) => 
      {
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(file);
  
        fileReader.onload = (e) => 
        {
          e.preventDefault();
          if(e.target===null)return
         
          const bufferArray = e.target.result;
          const wb = XLSX.read(bufferArray, { type: "buffer" });
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data = XLSX.utils.sheet_to_json(ws);
  
          resolve(data);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
  
      promise.then((d) => {
        setExcel({info:isFile?isFile[0]:undefined ,data:d,err:false})
      });
    }
    
  return (
    <div className="w-full mx-auto xl:w-[48%] lg:w-[48%]">
      <div
        className={`border-dashed border-2 border-gray-600 rounded-lg flex justify-center items-center py-40 hover:bg-myGreen hover:text-white cursor-pointer relative mb-[1rem] ${
          excel.data ? "bg-myGreen text-white" : "text-black"
        }`}
      >
        <input
          id="excelInput"
          className="opacity-0 w-[100%] h-[100%] absolute cursor-pointer"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          type="file"
          onChange={gettinExcel}
        />
        <div className="mx-3">
          <i className="fa-solid fa-file-excel fa-3x text-center w-full"></i>
          {!excel.data && (
            <>
              <p className="font-medium mt-2 text-center">Cargar un archivo</p>
              <p className="mt-2 text-center">
                Seleccionar un archivo .csv .xlxs tu ordenador
              </p>
            </>
          )}
          {excel.data && (
            <p className="font-medium mt-2 text-center">{excel.info?.name}</p>
          )}
        </div>
        <div
          className={`absolute capitalize bg-myRed flex transition-all duration-200 text-myWhite items-center gap-[.8rem] px-[1rem] py-[.7rem] rounded-[.4rem] bottom-0 ${
            excel.err
              ? "opacity-1 translate-y-[-20%] pointer-events-auto"
              : "translate-y-[120%] opacity-0 pointer-events-none"
          }`}
        >
          <FontAwesomeIcon size="2xl" icon={faXmarkCircle} />
          <strong>por favor ingrese un archivo .xlsx o .cvs</strong>
        </div>
      </div>
      <button
        className={`font-medium transition-all duration-200 py-[.8rem] bg-myGreen text-[#fff] px-[1rem] w-[100%] rounded-[.4rem] flex justify-center ${excel.data?'hover:brightness-[108%]':'brightness-[80%]'}`}
        disabled={excel.data ? false : true}
      >
        <span>Enviar</span>&nbsp;
        <span className="block max-w-[15rem] whitespace-nowrap text-ellipsis overflow-hidden">
          {excel ? excel.info?.name : "..."}
        </span>
      </button>
    </div>
  );
}
