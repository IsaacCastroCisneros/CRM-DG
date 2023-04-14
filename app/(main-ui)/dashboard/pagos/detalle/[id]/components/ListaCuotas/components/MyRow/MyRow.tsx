import { appContext } from '@/context/AppContenxt';
import React,{useContext} from 'react'
import cuotas from '../../interfaces/cuoatas';
import MyRowItem from '../MyRowItem/MyRowItem';
import RegularPopup from '@/components/RegularPopup/RegularPopup';
import { myStyles } from '../../styles/myStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFilePdf, faImage } from '@fortawesome/free-solid-svg-icons';
import MyPdf from '../MyPdf/MyPdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import EditForm from '../../../EditForm/EditForm';

export default function MyRow(props:cuotas)
{
   const{setShowPopup}=useContext(appContext)

   const
   {
    cod,
    fech,
    nComprobante,
    medio,
    monto,
    estado
   }=props

   return (
     <ul className="flex border-b-[1px] border-[#EEEEEE]">
       <MyRowItem styles={"flex-[3]"} label={cod} />
       <MyRowItem styles={"flex-[2.5]"} label={fech} />
       <MyRowItem styles={"flex-[2.5]"} label={nComprobante} />
       <MyRowItem styles={"flex-[1]"} label={medio} />
       <MyRowItem styles={"flex-[1.5]"} label={monto} />
       <li className={`flex-[1.5] ${myStyles}`}>
         <button
           onClick={() =>
             setShowPopup({
               show: true,
               popup: (
                 <RegularPopup
                   content={
                     <VaucherPopup img="https://img-cdn.pixlr.com/pixlr-templates/620f09f7113be322f3db56fb/preview.webp" />
                   }
                   title="Voucher"
                 />
               ),
             })
           }
         >
           <FontAwesomeIcon icon={faImage} />
         </button>
       </li>
       <li className={`flex-[2] ${myStyles}`}>
         <PDFDownloadLink document={<MyPdf/>}>
           <FontAwesomeIcon icon={faFilePdf} />
         </PDFDownloadLink>
       </li>
       <MyRowItem styles={"flex-[2]"} label={estado} />
       <li className={`flex-[2] ${myStyles}`}>
         <a target={"_blank"} rel="noreferrer" href={`https://api.whatsapp.com/send?phone=51958126707&text=Hola`}>
           <i className="fa-brands fa-whatsapp"></i>
         </a>
       </li>
       <li className={`flex-[2] ${myStyles}`}>
         <button
           onClick={() =>
             setShowPopup({
               show: true,
               popup: <EditForm setShowPopup={setShowPopup} />,
             })
           }
         >
           <FontAwesomeIcon icon={faEdit} />
         </button>
       </li>
     </ul>
   );
}


function VaucherPopup({img}:{img:string})
{
  return( 
      <img className='w-[100%]' src={img} alt="" />
  )
}