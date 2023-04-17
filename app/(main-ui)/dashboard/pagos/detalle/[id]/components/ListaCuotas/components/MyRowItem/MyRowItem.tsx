import React from 'react'
import { myStyles } from '../../styles/myStyles'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCheck,faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface props
{
  label?:string|boolean,
  styles?:string,
}

export default function MyRowItem(props:props)
{
  const
  {
    label,
    styles='flex-1',
  }=props

  return (
    <li className={`${styles} ${myStyles}`}>
      {typeof label !== "boolean" && <>{label}</>}
      {label === true &&<Status styles={'border-blue-500 text-blue-500'} label="Realizado" icon={faCheck} /> }
      {label === false &&<Status styles={'border-yellow-500 text-yellow-500'} label="Pendiente" icon={faXmark} />}
    </li>
  );
}

function Status({label,styles,icon}:{label:string,styles:string,icon:IconProp})
{
    return (
      <span className={`border-[1px] flex ${styles} items-center px-[.5rem] py-[.2rem] justify-around rounded-[.5rem]`}>
        <FontAwesomeIcon icon={icon} /> {label}
      </span>
    );
}
