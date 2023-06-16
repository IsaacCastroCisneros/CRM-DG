import React from 'react'
import { Sesion } from './components/Sesion/Sesion'
import MyBlock from '@/components/MyBlock/MyBlock'

export default function page() 
{
  return (
    <MyBlock title="Sesiones" subtitle='siga-patrim-ago23 - SIGA MEF MÓDULO: PATRIMONIO Y TESORERÍA'>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[1rem]">
        <Sesion
          title="SESION 1"
          subtitle="MARCO NORMATIVO Y PROCESO DE IMPLEMENTACIÓN DEL SIGA MÓDULO PATRIMONIO"
          fecha="2023-08-11"
          hora="19:30 - 22:00"
        />
        <Sesion
          title="SESION 1"
          subtitle="MARCO NORMATIVO Y PROCESO DE IMPLEMENTACIÓN DEL SIGA MÓDULO PATRIMONIO"
          fecha="2023-08-11"
          hora="19:30 - 22:00"
        />
        <Sesion
          title="SESION 1"
          subtitle="MARCO NORMATIVO Y PROCESO DE IMPLEMENTACIÓN DEL SIGA MÓDULO PATRIMONIO"
          fecha="2023-08-11"
          hora="19:30 - 22:00"
        />
        <Sesion
          title="SESION 1"
          subtitle="MARCO NORMATIVO Y PROCESO DE IMPLEMENTACIÓN DEL SIGA MÓDULO PATRIMONIO"
          fecha="2023-08-11"
          hora="19:30 - 22:00"
        />
        <Sesion
          title="SESION 1"
          subtitle="MARCO NORMATIVO Y PROCESO DE IMPLEMENTACIÓN DEL SIGA MÓDULO PATRIMONIO"
          fecha="2023-08-11"
          hora="19:30 - 22:00"
        />
        <Sesion
          title="SESION 1"
          subtitle="MARCO NORMATIVO Y PROCESO DE IMPLEMENTACIÓN DEL SIGA MÓDULO PATRIMONIO"
          fecha="2023-08-11"
          hora="19:30 - 22:00"
        />
      </div>
    </MyBlock>
  );
}

