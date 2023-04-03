import pdfMaker from '@/helpers/pdfMaker';
import { faSheetPlastic } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react'
import MyButtonThin from '../../../MyButtonThin/MyButtonThin';
import { pagosNewFormContext } from '../../PagosNewForm';
import FormOption from '../../../../../../../../../components/FormOption/FormOption'


export default function BottomForm() 
{
  const{isOk}=useContext(pagosNewFormContext)
  
  return (
    <div>
      <section className="flex gap-[1rem] mb-[1rem]">
        <FormOption
          name={"precio normal"}
          label={"precio normal"}
          type={"number"}
          flex={1}
        />
        <FormOption
          name={"pronto pago"}
          label={"pronto pago"}
          type={"number"}
          flex={1}
        />
        <FormOption
          name={"descuento"}
          label={"descuento"}
          type={"number"}
          flex={0.8}
        />
        <FormOption name={"marketero"} label={"marketero"} flex={1.5} />
        <FormOption
          name={"medioDeContacto"}
          options={["lel", "luul", "xd"]}
          label={"medio de contacto"}
          flex={1.7}
        />
        <FormOption
          name={"fotoDelVoucher"}
          label={"foto del voucher"}
          type="file"
          flex={2}
        />
      </section>
      <div className="flex flex-col text-myBlack pl-[24px] items-start">
        <span className="capitalize mb-[9.5px]">ficha de inscripcion</span>
        <MyButtonThin label="generar ficha" icon={faSheetPlastic} enabled={isOk}/>
      </div>
    </div>
  );
}
