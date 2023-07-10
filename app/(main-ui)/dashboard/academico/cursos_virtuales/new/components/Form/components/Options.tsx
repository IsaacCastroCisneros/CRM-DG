import React from 'react'
import step from '../../../interfaces/step'
import { SwitchInput } from '@/components/SwitchInput/SwitchInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import { CustomSelector } from '@/components/CustomSelector/CustomSelector';

export const Options = ({values,setValues}:step) => 
{
  return (
    <>
      <MyFlexContainer gap="98px">
        <SwitchInput
          checked={values.cursoEsGratuito}
          name="cursoEsGratuito"
          onChange={(e) =>
            setValues({ ...values, cursoEsGratuito: e.target.checked })
          }
        />
        <SwitchInput
          checked={values.descuento}
          name="descuento"
          onChange={(e) =>
            setValues({ ...values, descuento: e.target.checked })
          }
        />
        <SwitchInput
          checked={values.pagoRequerido}
          name="pagoRequerido"
          onChange={(e) =>
            setValues({ ...values, pagoRequerido: e.target.checked })
          }
        />
      </MyFlexContainer>
      {
       !values.cursoEsGratuito&& 
       <MyFlexContainer>
          <MyFormInput
            value={values.precioDeCurso}
            name="precioDeCurso"
            onChange={(e) =>
              setValues({ ...values, precioDeCurso: e.target.value })
            }
          />
          <MyFormInput
            value={values.descuentoPrecio}
            name="descuento"
            onChange={(e) =>
              setValues({ ...values, descuentoPrecio: e.target.value })
            }
          />
          <MyFormInput
            value={values.tipoDescuento}
            name="tipoDescuento"
            options={["fixed", "descuento"]}
            onChange={(e) =>
              setValues({ ...values, tipoDescuento: e.target.value })
            }
          />
        </MyFlexContainer>
      }
      <CustomSelector name="categoriaDeCurso" />
    </>
  );
}
