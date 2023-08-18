"use client"

import React, { useContext } from 'react'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { SwitchInput } from '@/components/SwitchInput/SwitchInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { FormFileInputSimple } from '@/components/FormFileInputSimple/FormFileInputSimple'
import { context } from '../Form'

export const Media = () => 
{
  const{program,updateProgram}= useContext(context)
  const{type}=program

  return (
    <>
      <SwitchInput
        name="activarVideoEnLandingPage"
        checked={program.activarVideoEnLandingPage}
        onChange={(e) =>
          updateProgram({ ...program, activarVideoEnLandingPage: e.target.checked })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          value={program.seleccionarVideoParaLanding}
          name="seleccionarVideoParaLanding"
          options={["youtube", "vimeo"]}
          onChange={(e) =>
            updateProgram({
              ...program,
              seleccionarVideoParaLanding: e.target.value,
            })
          }
        />
        <MyFormInput
          value={program.codigoDeVideoUrl}
          name="codigoDeVideoUrl"
          onChange={(e) =>
            updateProgram({ ...program, codigoDeVideoUrl: e.target.value })
          }
        />
      </MyFlexContainer>
      <MyFlexContainer>
        <FormFileInputSimple value={program.cardsPaginaPrincipal} name="cardsPaginaPrincipal (Index)" />
        <FormFileInputSimple value={program.fondoParaLandingPage} name="fondoParaLandingPage (Lading)" />
      </MyFlexContainer>
      <MyFlexContainer>
        <FormFileInputSimple value={program.iconoDelProgram} name={`icono del ${program} (Aula Virtual)`}/>
        <FormFileInputSimple value={program.bannerPromocional} name="bannerPromocial (Lading)" />
      </MyFlexContainer>
    </>
  );
}
