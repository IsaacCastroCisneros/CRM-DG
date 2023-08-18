"use client"

import React, { useContext } from 'react'
import { SwitchInput } from '@/components/SwitchInput/SwitchInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer';
import { MyFormInput } from '@/components/MyFormInput/MyFormInput';
import { CustomSelector } from '@/components/CustomSelector/CustomSelector';
import { context } from '../Form';

export const Options = () => 
{
  const{program,updateProgram}=useContext(context)
  const{type}=program

  return (
    <>
      <MyFlexContainer gap="98px">
        {type === "curso" && (
          <SwitchInput
            checked={program.programEsGratuito}
            name={`${type}EsGratuito`}
            onChange={(e) =>
              updateProgram({ ...program, programEsGratuito: e.target.checked })
            }
          />
        )}
        <SwitchInput
          checked={program.descuento}
          name="descuento"
          onChange={(e) =>
            updateProgram({ ...program, descuento: e.target.checked })
          }
        />
        <SwitchInput
          checked={program.pagoRequerido}
          name="pagoRequerido"
          onChange={(e) =>
            updateProgram({ ...program, pagoRequerido: e.target.checked })
          }
        />
      </MyFlexContainer>
      {!program.programEsGratuito && (
        <MyFlexContainer className="items-center">
          <MyFormInput
            value={program.precioDeProgram}
            type="number"
            isMoney
            name={`precio de ${type}`}
            onChange={(e) =>
              updateProgram({ ...program, precioDeProgram: e.target.value })
            }
          />
          {program.descuento && (
            <MyFormInput
              value={program.descuentoPrecio}
              isMoney
              name="descuento"
              type='number'
              onChange={(e) =>
                updateProgram({ ...program, descuentoPrecio: e.target.value })
              }
            />
          )}
          <MyFormInput
            value={program.tipoDescuento}
            name="tipoDescuento"
            options={["fixed", "descuento"]}
            onChange={(e) =>
              updateProgram({ ...program, tipoDescuento: e.target.value })
            }
          />
        </MyFlexContainer>
      )}
      <CustomSelector
        name="categoriaDeCurso"
        items={program.categoriaDeProgram}
        updateProgram={(items) =>
          updateProgram({ ...program, categoriaDeProgram: items })
        }
      />
    </>
  );
}

