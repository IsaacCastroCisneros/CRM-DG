import Image from 'next/image'
import MyOptions from '../components/MyOptions/MyOptions'
import StatusEnvio from '../components/StatusEnvio/StatusEnvio'
import TableImg from '@/components/TableImg/TableImg'


const columns =
[
  {
    name:'Certificado',
    cell:(row:any)=>row.certificado
  },
  {
    name:'Nombre',
    selector: (row:any) => row.nombre,
  },
  {
    name:'Usuario',
    selector:(row:any)=><TableImg src={row.user} />,
  },
  {
    name:'Estado',
    cell:(row:any)=><StatusEnvio exist={row.status}/>
  },
  {
    name:'Opciones',
    cell:(row:any)=> <MyOptions user={row} />
  }
]

export default columns
