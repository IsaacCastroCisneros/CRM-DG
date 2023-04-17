import MyBlock from '@/components/MyBlock/MyBlock'
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <MyBlock title="email">
      <>{children}</>
    </MyBlock>
  );
}
