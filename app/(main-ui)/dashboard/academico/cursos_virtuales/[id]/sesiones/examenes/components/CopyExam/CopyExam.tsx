
'use client'

import TheDataTable from '@/components/TheDataTable/TheDataTable'
import React from 'react'
import copyExamColumns from './helpers/copyExamColumns'

const data=
[
  {
    id:'0',
    title:'fdfd'
  },
  {
    id:'2',
    title:'no'
  }
]

export const CopyExam = () => {
  return (
    <div className="flex gap-[1rem]">
      <section>
        <strong>Programa</strong>
        <TheDataTable data={data} columns={copyExamColumns("Ver")} />
      </section>
      <section>
        <strong>Examens</strong>
        <TheDataTable data={data} columns={copyExamColumns("Copiar")} />
      </section>
    </div>
  );
}
