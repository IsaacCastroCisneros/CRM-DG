import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import AddStudent from './components/AddStudent/AddStudent'

export default function page() {
  return (
    <MyBlock title="Añadir Alumno" extraThick={true}>    
        <AddStudent />
    </MyBlock>
  );
}
