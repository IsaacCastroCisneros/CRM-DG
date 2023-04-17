'use client'

import MyBlock from '@/components/MyBlock/MyBlock'
import TheDataTable from '@/components/TheDataTable/TheDataTable';
import React from 'react'
import TableProspectos from './components/TableProspectos';

export default function page() 
{
    const columns = [
      {
        name: "nombre",
        selector: (row: any) => row.nombre,
      },
      {
        name: "categoria",
        selector: (row: any) => row.categoria,
      },
      {
        name: "fecha",
        selector: (row: any) => row.fecha,
      },
      {
        name:"modalidad",
        selector: (row: any) => row.modalidad,
      }
    ];

    const data:any = [
        {
          id: 1,
          nombre: "Sistema Integrado de Administración Financiera – SIAF",
          logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/ICONOS_osce_DG.png",
          fecha: "17/01/2023",
          categoria: "Curso",
          modalidad: "Dual",
          prospectos: 50,
          alumnos: [{
            id: 1,
            nombre: "Juan Peres",
            medio: "WhatsApp",
            programa: "Marketing Digital",
            modalidad: "Virtual",
            correo: "juan@hotmail.com",
            fechaRegistro: "20/01/2023",
            estado: "Comprado"
          },
          {
            id: 2,
            nombre: "Martin Ris",
            medio: "Facebook",
            programa: "Programacion",
            modalidad: "Presencial",
            correo: "mar@hotmail.com",
            fechaRegistro: "20/01/2023",
            estado: "No desea"
          }
          ]
        },
        {
          id: 2,
          nombre: "Sistema Integrado de Gestión Administrativa – SIGA",
          logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/06/icono_contabilidad_gubernamental.png",
          fecha: "01/01/2023",
          categoria: "Diploma",
          modalidad: "Presencial",
          prospectos: 20,
          alumnos: [{
            id: 1,
            nombre: "Lucas Ris",
            medio: "Web",
            programa: "Sales Support",
            modalidad: "Presencial",
            correo: "juan@hotmail.com",
            fechaRegistro: "20/01/2023",
            estad: "Pagado"
          },
          {
            id: 2,
            nombre: "Martin Ris",
            medio: "Facebook",
            programa: "Programacion",
            modalidad: "Presencial",
            correo: "lucas@hotmail.com",
            fechaRegistro: "20/01/2023",
            estado: "No pagado"
          }
          ]
        },
        {
          id: 3,
          nombre: "Sistema Electrónico de Contrataciones del Estado – SEACE ",
          logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2021/01/icono-nuevo-curso-invierte.png",
          fecha: "05/01/2023",
          categoria: "Diploma",
          modalidad: "Presencial",
          prospectos: 20,
          alumnos: [{
            id: 1,
            nombre: "Pepe Lucho",
            medio: "Facebook",
            programa: "Sales Support",
            modalidad: "Presencial",
            correo: "pepe@hotmail.com",
            fechaRegistro: "20/01/2023",
            estad: "Pagado"
          },
          {
            id: 2,
            nombre: "Martin Ris",
            medio: "Facebook",
            programa: "Programacion",
            modalidad: "Presencial",
            correo: "lucas@hotmail.com",
            fechaRegistro: "20/01/2023",
            estado: "No pagado"
          }
          ]
        },
        {
          id: 4,
          nombre: "Ofimática para Servidores Públicos",
          logo: "https://s3-us-west-2.amazonaws.com/uploads-desarrolloglobal.pe/2019/07/siga-patrimonio.png",
          fecha: "05/01/2023",
          categoria: "Curso",
          modalidad: "Virtual",
          prospectos: 10,
          alumnos: [{
            id: 1,
            nombre: "Sara Lopez",
            medio: "WhatsApp",
            programa: "Sales Support",
            modalidad: "Presencial",
            correo: "Sara@hotmail.com",
            fechaRegistro: "20/01/2023",
            estad: "Pagado"
          },
          {
            id: 2,
            nombre: "Angie Madueño",
            medio: "Web",
            programa: "Programacion",
            modalidad: "Presencial",
            correo: "Angie@hotmail.com",
            fechaRegistro: "20/01/2023",
            estado: "No pagado"
          }
          ]
        }
      ]

  return (
    <MyBlock title='Prospectos'>
       <TableProspectos/>
    </MyBlock>
  )
}
