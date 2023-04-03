import { Modal } from "@/components/certificados/Modal";

interface PropExport {
    onExport: any
}
export const Export: React.FC<PropExport> = ({ onExport }) => {
    console.log(onExport)
    return (
        <div className="flex flex-col justify-center gap-3 my-5 lg:flex-row ">
           <Modal/>
            <button onClick={e => onExport()}
                className="rounded-lg bg-green-600 py-2 px-5 text-white font-medium flex items-center gap-3 text-base"
            ><i className="fa-solid fa-file-excel text-white"></i>Excel</button>
        </div>
    )
};