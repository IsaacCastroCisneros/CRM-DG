import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import Programs from './components/Programs'

export default async function page() 
{
  return (
    <MyBlock title='Programas'>
      <Programs/>
    </MyBlock>
  )
}
