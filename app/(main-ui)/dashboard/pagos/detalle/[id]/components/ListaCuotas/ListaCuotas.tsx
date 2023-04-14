'use client'

import React from 'react'
import cuotas from './interfaces/cuoatas';
import MyRowItem from './components/MyRowItem/MyRowItem';
import MyRow from './components/MyRow/MyRow';

export default function ListaCuotas() 
{
  const cuotas:Array<cuotas>=
  [
    {
       cod:'CUOTA 01 - RP8',
       fech:'15/08/2023',
       nComprobante:'465456465',
       medio:'BCP',
       monto:'S/ 317.00',
       voucher:'lel',
       factura:'pdf',
       estado:true,
       wp:'http',
    },
    {
        cod:'CUOTA 01 - RP3',
        fech:'15/08/2025',
        nComprobante:'4654556465',
        medio:'inter',
        monto:'S/ 31557.00',
        voucher:'lefd',
        factura:'pdf',
        estado:false,
        wp:'http',
     },
     {
        cod:'CUOTA 01 - RP5',
        fech:'15/08/2024',
        nComprobante:'4655454',
        medio:'scotio',
        monto:'S/ 317',
        voucher:'fd',
        factura:'fdfd',
        estado:false,
        wp:'http',
     }
  ]


  return (
    <>
      <div className="text-myBlack font-normal w-[100%] border-[1px] border-[#DDDDDD]">
        <section className="bg-[#F5F6F8]">
          <ul className="px-[2rem] py-[.7rem] flex">
            <MyRowItem styles="flex-[3] uppercase" label={"cod"} />
            <MyRowItem styles="flex-[2.5] uppercase" label={"fech"} />
            <MyRowItem styles="flex-[2.5] uppercase" label={"nComprobante"} />
            <MyRowItem styles="flex-[1] uppercase" label={"medio"} />
            <MyRowItem styles="flex-[1.5] uppercase" label={"monto"} />
            <MyRowItem styles="flex-[1.5] uppercase" label={"voucher"} />
            <MyRowItem styles="flex-[2.5] uppercase" label={"factura"} />
            <MyRowItem styles="flex-[2] uppercase" label={"estado"} />
            <MyRowItem styles="flex-[2] uppercase" label={"mensaje"} />
            <MyRowItem styles="flex-[2] uppercase" label={"editar"} />
          </ul>
        </section>
        <section className="pt-[1.5rem] px-[2rem] pb-[3rem]">
          {cuotas.map((cuo, pos) => {
            return <MyRow key={pos} {...cuo} />;
          })}
        </section>
      </div>
       
    </>
  );
}











