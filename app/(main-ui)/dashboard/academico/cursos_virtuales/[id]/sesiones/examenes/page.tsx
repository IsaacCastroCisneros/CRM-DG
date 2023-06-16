import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import { ExamenesTable } from './components/ExamenesTable';

export default function page() {
  return (
    <MyBlock title="Examenes">
      <ExamenesTable/>
    </MyBlock>
  );
}


