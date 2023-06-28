import React from 'react'
import { Sesion } from './components/Sesion/Sesion'
import MyBlock from '@/components/MyBlock/MyBlock'
import { Buttons } from './components/Buttons/Buttons';

export default function page() 
{

  return (
    <MyBlock
      title="Sesiones"
      subtitle="ELABORACIÓN DE INSTRUMENTOS"
    >
      <Buttons/>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[1rem] bg-slate-600 p-[1rem] rounded-[.5rem]">
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

