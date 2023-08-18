"use client"

import date from '@/interfaces/date'
import filter from '@/interfaces/filter'
import { useState } from 'react'

export default function useMyFilter(data:Array<Record<any,any>>,isDate:boolean=false) 
{
  const[myFilter,setMyFilter]= useState<Array<filter>>([{value:'',property:''}])  
  const[date,setDate]=useState<date>({start:"",end:""})


  let filteredData= data.filter((item: any) => 
  {
    const isPass = myFilter.every((m) => {
      if (m.value === "") return true;
      return (
        `${item[m.property.toLowerCase()]}`.toLowerCase() === m.value.toLowerCase()
      );
    });
       return isPass === true;
    });

  if(isDate)
  {
    filteredData=filteredData.filter((item:any)=>
      {
        if (date.start === "" || date.end === "") return true;
        return (
          new Date(item.created) > new Date(date.start) &&
          new Date(item.created) < new Date(date.end)
        );
      })
  }

  return{
    myFilter,
    setMyFilter,
    filteredData,
    setDate
  }
}
