import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'
import CopiarPegar from './components/CopiarPegar'

export default function page() {
  return (
    <MyBlock title='Copiar/Pegar' subtitle='copie y pegue su registro de certificados desde un archivo' >
        <CopiarPegar/>
    </MyBlock>
  )
}
