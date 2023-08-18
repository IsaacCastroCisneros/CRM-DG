"use client"

import React, { useState } from 'react'
import TheDataTable from '@/components/TheDataTable/TheDataTable'
import programsColumns from '../helpers/programsColumns'
import filter from '@/interfaces/filter'
import MyFilters from '@/components/MyFilters/MyFilters'
import date from '@/interfaces/date'
import DatePickers from '@/components/DatePickers/DatePickers'
import useMyFilter from '@/hooks/useMyFilter'

const data = [
  {
    img: "/img/cer.webp",
    type: "curso",
    titulo: "siaf",
    mode: "virtual",
    sessions: "5",
    status: true,
    students: "50",
    price: "200",
    destacado: false,
    created: "2023-05-08",
  },
  {
    img: "/img/cer.webp",
    type: "diploma",
    titulo: "siaf",
    mode: "dual",
    sessions: "5",
    status: true,
    students: "50",
    price: "200",
    destacado: false,
    created: "2023-09-15",
  },
  {
    img: "/img/cer.webp",
    type: "diplomado",
    titulo: "siaf",
    mode: "presencial",
    sessions: "4",
    status: false,
    students: "50",
    price: "200",
    destacado: true,
    created: "2023-08-11",
  },
  {
    img: "/img/cer.webp",
    type: "curso",
    titulo: "siaf",
    mode: "dual",
    sessions: "5",
    status: true,
    students: "50",
    price: "200",
    destacado: false,
    created: "2023-04-11",
  },
  {
    img: "/img/cer.webp",
    type: "diploma",
    titulo: "siaf",
    mode: "dual",
    sessions: "5",
    status: true,
    students: "50",
    price: "200",
    destacado: true,
    created: "2024-09-11",
  },
  {
    img: "/img/cer.webp",
    type: "diplomado",
    titulo: "siaf",
    mode: "virtual",
    sessions: "4",
    status: false,
    students: "50",
    price: "200",
    destacado: false,
    created: "2015-01-01",
  },
];

const Programs = () => 
{
  const{myFilter,setMyFilter,filteredData,setDate}=useMyFilter(data,true)
 
  return (
    <>
      <TheDataTable
        newButton={false}
        buttons={
          <>
            <MyFilters
              filters={[
                {
                  label: "type",
                  labelOnScreen: "Tipo",
                  options: ["curso", "diploma", "diplomado"],
                },
                {
                  label: "mode",
                  labelOnScreen: "modalidad",
                  options: ["dual", "presencial", "virtual"],
                },
                {
                  label: "status",
                  labelOnScreen: "estado",
                  options: [{label:"publicado",value:"true"} , {value:"false",label:"no publicado"}],   
                },
              ]}
              setMyFilter={setMyFilter}
              myFilters={myFilter}
            />
            <DatePickers setDate={setDate} />
          </>
        }
        data={filteredData}
        columns={programsColumns}
      />
    </>
  );
}

export default Programs
