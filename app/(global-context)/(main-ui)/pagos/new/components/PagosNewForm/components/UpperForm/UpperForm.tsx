import React from 'react'
import FormOption from '../../../../../../../../../components/FormOption/FormOption'
import { Form} from 'formik';

export default function UpperForm()
{
   return(
    <div className="bg-myGray px-[2rem] py-[1.5rem] mb-[1.6rem]">
          <div className="flex gap-[.5rem] items-stretch">
            <FormOption name={"codigo"} label="codigo" />
            <FormOption
              label="editor"
              name={"editor"}
              options={["lucero", "lel"]}
            />
            <FormOption label="Nº de operacion" name={"nDeOperacion"} />
            <FormOption
              label="forma de pago"
              name={"formaDePago"}
              options={["bcp", "lel"]}
            />
            <FormOption
              label="estado"
              name={"estado"}
              options={["bcp", "lel"]}
            />
            <FormOption
              label="comprobante"
              name={"comprobante"}
              options={["bcp", "lel"]}
            />
          </div>
          <div className="flex gap-[.5rem] items-stretch">
            <FormOption label="alumno" name={"alumno"} />
            <FormOption
              label="categoria"
              name={"categoria"}
              options={["bcp", "lel"]}
            />
            <FormOption
              label="nombre del programa"
              name={"nombreDelPrograma"}
            />
          </div>
          <div className="flex gap-[.5rem] items-stretch">
            <FormOption label="modalidad" name={"modalidad"} />
            <FormOption
              label="fecha de inicio"
              name={"fechaDeInicio"}
              type="date"
            />
            <FormOption label="fecha fin" name={"fechaFin"} type="date" />
          </div>
      </div>
   )
}
