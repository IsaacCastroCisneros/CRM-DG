import { useExportExcel } from "@/hooks/useExportExcel"
import Image from "next/image"

export const BtnExportExcel = ({ data }: any) => {
    const [downloadCSV] = useExportExcel(data)
    return (
        <button onClick={() => downloadCSV(data)}>
            <Image
                src="/img/gif/excel.png"
                alt="Picture of the author"
                width={35}
                height={35}
            />
        </button>
    )
}