import React from 'react'
import MyBlock from '@/components/MyBlock/MyBlock'
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

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

