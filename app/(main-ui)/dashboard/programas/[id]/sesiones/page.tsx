import React from 'react'
import MyBlock from '@/components/MyBlock/MyBlock'
import ClientContent from './components/ClientContent/ClientContent';
import KanbanBoard from './components/KanbanBoard';

export default function page() 
{

  return (
    <MyBlock
      title="Sesiones"
      subtitle="ELABORACIÓN DE INSTRUMENTOS"
    >
      <KanbanBoard/>
    </MyBlock>
  );
}

