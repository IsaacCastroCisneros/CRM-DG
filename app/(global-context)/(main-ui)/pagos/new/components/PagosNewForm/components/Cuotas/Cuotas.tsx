import { faCheck, faDollar, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import MyButtonThin from '../../../MyButtonThin/MyButtonThin'
import FormOption from '../../../../../../../../../components/FormOption/FormOption'

export default function Cuotas() 
{
  const list:Array<cuota>=
  [
    {
       cuota:'CUOTA 01 - RP8fdfdfdfdfdfd',
       date:'15/08/2023',
       codigo:465456465,
       banco:'BCP',
       monto:'317.00',
       status:false
    },
    {
        cuota:'SIAF',
        date:'12/f4/fd',
        codigo:992999999,
        banco:'bcp',
        monto:'435',
        status:true
     },
     {
        cuota:'SIGA',
        date:'12/f34/f4',
        codigo:9343,
        banco:'interbank',
        monto:'788',
        status:true
     }
  ]  

  return (
    <div className='text-myBlack mb-[2rem]'>
        <div className='flex flex-col mb-[12.8px] px-[24px]'>
            <span className='block capitalize mb-[.6rem]'>cuota correspondiente</span>
            <div className='flex items-stretch gap-[1.5rem] w-[20rem]'>
                <MyButtonThin label='ver cuotas' icon={faDollar} onClick={()=>null} />
                <FormOption options={['hmm','fdfdf']}/>
            </div>
        </div>
        <ul className='flex flex-col gap-[.7rem]'>
           {
             list.map((cuo,pos)=>
                {
                    return(
                        <Cuota key={pos} {...cuo}/>
                    )
                })
           }
        </ul>
    </div>
  )
}

interface cuota
{
  cuota:string;
  date:string;
  codigo:number;
  banco:string;
  monto:string;
  status:boolean;
}

function Cuota(props:cuota)
{
  const
  {
    cuota,
    date,
    codigo,
    banco,
    monto,
    status
  }=props

  return (
    <li className="flex px-[2rem] py-[.7rem] bg-[#DDDDDD] justify-between items-center rounded-lg">
      <CuotaField value={cuota}/>
      <CuotaField value={date}/>
      <CuotaField value={codigo}/>
      <CuotaField value={banco}/>
      <CuotaField monto={monto}/>
      <CuotaField status={status} />
    </li>
  );
}

function CuotaField({value,status,monto}:{value?:string|number|undefined,status?:boolean,monto?:string})
{

    const statusStyle = `border-[1px] flex items-center w-[125.17px] gap-[1rem] bg-myWhite justify-center py-[.3rem] ${status?'border-primary text-primary':'border-yellow-400 text-yellow-400'}`
    const regularStyle= "w-[8rem] text-center overflow-hidden whitespace-nowrap text-ellipsis"

    return (
      <span
        className={status !== undefined ? statusStyle : regularStyle}
        title={value ? value.toString() : ""}
      >
        {
          monto&&<>S/{Number(monto).toFixed(2)}</>
        }
        {
          monto===undefined&&
          <>
            {status === undefined && <>{value}</>}
            {status !== undefined && (
              <>
                <FontAwesomeIcon icon={status ? faCheck : faXmark} />
                {status && <>Realizado</>}
                {!status && <>Pendiente</>}
              </>
            )}
          </>
        }
      </span>
    );
}