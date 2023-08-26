"use client"

import DataTable from 'react-data-table-component';
import React, { ReactElement, ReactNode, useState } from 'react'
import { FilterComponent } from './components/FilterComponent';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { MyLink } from '../MyLink/MyLink';
import { usePathname } from 'next/navigation';
import filter from '@/interfaces/filter';
import date from '@/interfaces/date';

interface props
{
  data:any;
  columns:any;
  conditionalStyles?:any;
  buttons?:ReactElement<any, any>;
  newButton?:boolean|ReactNode
  myFilter?:Array<filter>
  date?:date
}

const TheDataTable=(props:props)=> 
{
  const path = usePathname()||''

  const {
    data,
    columns,
    conditionalStyles,
    buttons,
    myFilter,
    newButton = (
      <MyLink
        href={`${path}/new`}
        className="h-[50px] w-[147px] font-semibold text-[16px]"
        icon={faPlusCircle}
      >
        Nuevo
      </MyLink>
    ),
    date
  } = props;


  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  let filteredItems=data.filter(
		(item: any) => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1,
	)

  if(myFilter)
  {
    filteredItems = data.filter((item: any) =>
          {
            const isPass= myFilter.every(m=>
              {
                  if(m.value==="")return true
                  return item[m.property.toLowerCase()].toLowerCase()===m.value.toLowerCase()
              })
              return isPass===true
          });

    if(date)
    {
      filteredItems=filteredItems.filter((item:any)=>
        { 
          if(date.start===""||date.end==="")return true
          return (
            new Date(item.created) > new Date(date.start) &&
            new Date(item.created) < new Date(date.end)
          );   
        })
    }
  }

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
      <div className="flex w-[100%] justify-between mb-[2rem] items-center">
        <div className="flex gap-[1rem] items-center">
          <FilterComponent
            onFilter={(e: any) => setFilterText(e.target.value)}
            onClear={handleClear}
            filterText={filterText}
          />
          {buttons}
        </div>
        {
          newButton 
        }
      </div>
    ); 
	}, [filterText, resetPaginationToggle,myFilter]);


  return (
    <>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle}
        subHeader
        highlightOnHover
        subHeaderComponent={subHeaderComponentMemo}
        conditionalRowStyles={conditionalStyles}
        customStyles={{
          headCells: {
            style: {
              display:'flex',
              justifyContent:'center',
              textTransform:'capitalize',
              backgroundColor:'#485BFF',
              color:"#fff",
              fontWeight:600
            },
          },
          cells: {
            style: {
              display:'flex',
              fontSize:'14px',
              fontWeight:'medium',
              justifyContent:'center',
              color:'#7A8897',
              textTransform:'capitalize'
            },
          },
        }}
/*         selectableRows */
        persistTableHead
      />
    </>
  );
}

export default TheDataTable