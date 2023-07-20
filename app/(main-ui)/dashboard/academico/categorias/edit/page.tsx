import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import CategoriaForm from '../components/CategoriaForm/CategoriaForm'

export default function page() 
{
  return (
    <MyBlock title="Editar Categoria">
      <CategoriaForm />
    </MyBlock>
  );
}
