import { useEffect, useState } from 'react';
export const ExportExcel = (data:any) => {
    const [pending, setPending] = useState<any>(true);
    const [rows, setRows] = useState<any>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, []);

    return [
        pending,
        rows
    ]
}