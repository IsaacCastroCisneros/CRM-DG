import { useState, useEffect } from 'react';
export const useLoading = (data: any) => {
    const [pending, setPending] = useState<boolean>(true);
    const [rows, setRows] = useState<any>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setRows(data);
            setPending(false);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [])
    return [
        pending
    ]
     
}