import React from 'react'

export default function page({params}:{params:any}) 
{
  const{id}=params
  return (
    <div>{id}</div>
  )
}
