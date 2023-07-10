import React from 'react'
import step from '../../../interfaces/step'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import { SwitchInput } from '@/components/SwitchInput/SwitchInput'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { FormFileInputSimple } from '@/components/FormFileInputSimple/FormFileInputSimple'

export const Media = ({values,setValues}:step) => 
{
  return (
    <>
      <SwitchInput
        name="activarVideoEnLandingPage"
        checked={values.activarVideoEnLandingPage}
        onChange={(e) =>
          setValues({ ...values, activarVideoEnLandingPage: e.target.checked })
        }
      />
      <MyFlexContainer>
        <MyFormInput
          value={values.seleccionarVideoParaLanding}
          name="seleccionarVideoParaLanding"
          options={["youtube", "vimeo"]}
          onChange={(e) =>
            setValues({
              ...values,
              seleccionarVideoParaLanding: e.target.value,
            })
          }
        />
        <MyFormInput
          value={values.codigoDeVideoUrl}
          name="codigoDeVideoUrl"
          onChange={(e) =>
            setValues({ ...values, codigoDeVideoUrl: e.target.value })
          }
        />
      </MyFlexContainer>
      <MyFlexContainer>
        <FormFileInputSimple value={values.cardsPaginaPrincipal} name="cardsPaginaPrincipal (Index)" />
        <FormFileInputSimple value={values.fondoParaLandingPage} name="fondoParaLandingPage (Lading)" />
      </MyFlexContainer>
      <MyFlexContainer>
        <FormFileInputSimple value={values.iconoDelCurso} name="iconoDelCurso (Aula Virtual)" />
        <FormFileInputSimple value={values.bannerPromocional} name="bannerPromocial (Lading)" />
      </MyFlexContainer>
    </>
  );
}
