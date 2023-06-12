'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import TableProspectos from './components/TableProspectos';

const page=()=> 
{
  return (
    <MyBlock title='Prospectos'>
       <TableProspectos/>
    </MyBlock>
  )
}

export default page