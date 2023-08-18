import camelToNormal from '@/helpers/camelToNormal'
import inputContainer from '@/styles/inputContainer'
import inputLabel from '@/styles/inputLabel'
import React, { useEffect, useRef, useState } from 'react'
import removeDiacritics from './util/removeDiacritics'
import item from './interfaces/item'
import Item from './components/Item'
import { HtmlElement } from 'react-pdf-html/dist/parse'

interface props
{
  name:string,
  data?:Array<item>
  updateProgram:(items:Array<item>)=>void
  items:Array<item>
}

export const CustomSelector = (props:props) => 
{

  const
  {
    name,
    data=randomWords,
    updateProgram,
    items:currentItems
  }=props

  const myName = camelToNormal(name)
  const[searchParams,setSearchParams]=useState<string|null>(null)
  const[results,setResults]=useState<{finalResults:Array<item>,isShow:boolean}>({finalResults:[],isShow:false})
  const[items,setItems]=useState<Array<item>>([])

  const regex= new RegExp(`${searchParams}`,'gi')
  const input = useRef<HTMLInputElement|null>(null);

  useEffect(()=>
  {
    setResults({finalResults:data,isShow:false})
    setItems(currentItems)
  },[])

  useEffect(()=>
  {
    if(searchParams===null)return
    const finalResults= data?.filter(dat=>regex.test(removeDiacritics(dat.label.toLowerCase())))
    setResults({finalResults,isShow:true})
    
  },[searchParams])

  useEffect(()=>
  {
    toggleResults(false)
    updateProgram(items)
    if(input.current)
    {
      input.current.value=""
    }
  },[items])

  function toggleResults(isShow:boolean):void
  {
    setResults((prev) => {
      return { ...prev, isShow};
    })
  }
  function handleDeletingItem(id:string):void
  {
    const filteredItems=items.filter(item=>item.id!==id)
    setItems(filteredItems)
  }

  const{finalResults,isShow}=results

  return (
    <div className={inputContainer + " relative z-[999]"}>
      <label className={`${inputLabel} mb-[.6rem]`}>{myName}</label>
      <div className="flex flex-wrap gap-[.3rem]">
        {items.map((item, pos) => (
          <Item key={pos} {...item} handleDeletingItem={handleDeletingItem} />
        ))}
        <input
          type="text"
          ref={input}
          className="flex-1 px-[.3rem] py-[.1rem] outline-none"
          placeholder="ingresar criterio de busqueda..."
          onChange={(e) => setSearchParams(e.target.value)}
          onFocus={() => toggleResults(true)}
          onBlur={(e) => {
            if (e.relatedTarget?.closest(".item-custom-selector")) return;
            toggleResults(false);
          }}
        />
        {Item.length > 0 && (
          <button
            type="button"
            onClick={()=>setItems([])}
            className="hover:underline hover:text-primary"
          >
            Borrar todo
          </button>
        )}
        <ul
          className={`absolute bottom-0 translate-y-[103%] w-[100%] max-h-[13rem] overflow-y-auto my-shadow ${
            isShow
              ? "pointer-events-auto opacity-1"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {finalResults.map((result) => (
            <li key={result.id}>
              <button
                type="button"
                className="w-[100%] block item-custom-selector text-left py-[.2rem] px-[.7rem] bg-white hover:bg-myGray border-b-[1px] border-myBorder hover:text-[#fff] capitalize"
                onClick={() => {
                  if (items.some((item) => item.id === result.id)) return;
                  setItems([...items, { label: result.label, id: result.id }]);
                }}
              >
                {result.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


const randomWords:Array<item> = [
  { id: "id_1", label: "Juan Pérez" },
  { id: "id_2", label: "María García" },
  { id: "id_3", label: "Carlos Rodríguez" },
  { id: "id_4", label: "Ana López" },
  { id: "id_5", label: "Luis Martínez" },
  { id: "id_6", label: "Laura González" },
  { id: "id_7", label: "Andrés Fernández" },
  { id: "id_8", label: "Sofía Sánchez" },
  { id: "id_9", label: "Diego Ramírez" },
  { id: "id_10", label: "Isabella Torres" },
  { id: "id_11", label: "Matías Vargas" },
  { id: "id_12", label: "Valentina Jiménez" },
  { id: "id_13", label: "Emilio Morales" },
  { id: "id_14", label: "Lucía Rivera" },
  { id: "id_15", label: "Miguel Herrera" },
  { id: "id_16", label: "Camila Silva" },
  { id: "id_17", label: "Alejandro Mendoza" },
  { id: "id_18", label: "Renata Peña" },
  { id: "id_19", label: "Joaquín Gómez" },
  { id: "id_20", label: "Elena Castro" },
  { id: "id_21", label: "Nicolás Ríos" },
  { id: "id_22", label: "Daniela Ortega" },
  { id: "id_23", label: "Juanita Álvarez" },
  { id: "id_24", label: "Felipe Núñez" },
  { id: "id_25", label: "Catalina Paredes" },
  { id: "id_26", label: "Pedro Miranda" },
  { id: "id_27", label: "Manuela Soto" },
  { id: "id_28", label: "Roberto Fuentes" },
  { id: "id_29", label: "Carolina Ramos" },
  { id: "id_30", label: "Eduardo Bravo" },
  { id: "id_31", label: "Fernanda Mora" },
  { id: "id_32", label: "Ricardo Muñoz" },
  { id: "id_33", label: "Paulina Sánchez" },
  { id: "id_34", label: "Mauricio Vargas" },
  { id: "id_35", label: "Marina Torres" },
  { id: "id_36", label: "Ignacio Pérez" },
  { id: "id_37", label: "Valeria Gómez" },
  { id: "id_38", label: "Hernán López" },
  { id: "id_39", label: "Catalina Silva" },
  { id: "id_40", label: "Francisco Ramírez" },
  { id: "id_41", label: "Antonia Peña" },
  { id: "id_42", label: "Emilio Morales 2" },
  { id: "id_43", label: "Carla Rivera 2" },
  { id: "id_44", label: "Javier Herrera 2" },
  { id: "id_45", label: "Isidora Silva 2" },
  { id: "id_46", label: "Sebastián Soto 2" },
  { id: "id_47", label: "Constanza Bravo 2" },
  { id: "id_48", label: "Felipe Muñoz 2" },
  { id: "id_49", label: "Amanda Torres 2" },
  { id: "id_50", label: "Rodrigo Pérez" },
];