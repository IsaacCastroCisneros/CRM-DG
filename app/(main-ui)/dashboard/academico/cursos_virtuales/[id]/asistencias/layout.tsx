import React, { ReactNode } from 'react'
import MyBlock from '@/components/MyBlock/MyBlock'

export default function layout({children}:{children:ReactNode}) 
{
  return (
    <MyBlock title="Asistencias" subtitle="ELABORACIÓN DE INSTRUMENTOS">
      {children}
    </MyBlock>
  );
}
