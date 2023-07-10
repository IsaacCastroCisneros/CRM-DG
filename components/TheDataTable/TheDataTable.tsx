"use client"

import DataTable from 'react-data-table-component';
import React, { ReactElement } from 'react'
import { FilterComponent } from './components/FilterComponent';

interface props
{
  data:any;
  columns:any;
  conditionalStyles?:any;
  buttons?:ReactElement<any, any>;
  myFilter?:{value:string,property:string}
}

const TheDataTable=(props:props)=> 
{
  const
  {
    data,
    columns,
    conditionalStyles,
    buttons,
    myFilter
  }=props

  const [filterText, setFilterText] = React.useState('');
	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
	let filteredItems = data.filter(
		(item: any) => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1,
	);

  if(myFilter&&myFilter.value!=='')
  {
    filteredItems = data.filter((item: any) => item[myFilter.property.toLowerCase()] === myFilter.value);
  }

	const subHeaderComponentMemo = React.useMemo(() => {
		const handleClear = () => {
			if (filterText) {
				setResetPaginationToggle(!resetPaginationToggle);
				setFilterText('');
			}
		};

		return (
      <div className='flex w-[100%] justify-between'>
        <FilterComponent
          onFilter={(e: any) => setFilterText(e.target.value)}
          onClear={handleClear}
          filterText={filterText}
        />
        {
          buttons
        }
      </div>
    ); 
	}, [filterText, resetPaginationToggle]);


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