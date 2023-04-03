import { useMemo, useState } from 'react';
import { FilterComponent } from '../components/FilterComponent';

export const FiltraDatos = (data: any) => 
{
    const [filterText, setFilterText] = useState<string>('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);
    const filteredItems = data.filter((item: any) => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1);

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter= { (e:any) => setFilterText(e.target.value)} onClear = { handleClear } filterText = { filterText } />
    	);
    }, [filterText, resetPaginationToggle]);

    return [
        filteredItems,
        subHeaderComponentMemo  
    ]

}