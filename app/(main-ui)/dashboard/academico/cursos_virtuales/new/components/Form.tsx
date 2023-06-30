"use client"

import { FormFileInput } from '@/components/FormFileInput/FormFileInput'
import { FormFileInputSimple } from '@/components/FormFileInputSimple/FormFileInputSimple'
import { InputGroup } from '@/components/InputGroup/InputGroup'
import MyFlexContainer from '@/components/MyFlexContainer/MyFlexContainer'
import { MyForm } from '@/components/MyForm/MyForm'
import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React from 'react'

export const Form = () => 
{

  return (
    <MyForm label="Crear Curso" submit={async () => null} path="">
      <MyFormInput
        styles={{ container: "inline-flex w-[50%] mb-[3rem]" }}
        options={["oculto", "visible"]}
        onChange={() => null}
      />
      <InputGroup title="general">
        <MyFlexContainer>
          <MyFormInput name="codigo" onChange={() => null} />
          <MyFormInput
            name="tipoCurso"
            options={[
              "virtual",
              "dual",
              "presencial",
              "inHouse-publico",
              "inHouse-privado",
            ]}
            onChange={() => null}
          />
        </MyFlexContainer>
        <MyFlexContainer>
          <MyFormInput
            name="modalidad"
            options={["EN VIVO", "GRABADO"]}
            onChange={() => null}
          />
          <MyFormInput name="titulo" onChange={() => null} />
        </MyFlexContainer>
        <MyFormInput name="tituloPreCabecera" onChange={() => null} />
        <MyFlexContainer>
          <MyFormInput name="fechaDeinico" type="date" onChange={() => null} />
          <MyFormInput name="fechaDeFin" type="date" onChange={() => null} />
        </MyFlexContainer>
      </InputGroup>
      <InputGroup title="personal implicado">
        <MyFlexContainer>
          <MyFormInput name="profesor" onChange={() => null} />
          <MyFormInput
            name="asesores"
            options={["julio", "sebastian"]}
            onChange={() => null}
          />
        </MyFlexContainer>
      </InputGroup>
      <InputGroup title="imagenes">
        <MyFlexContainer>
          <FormFileInputSimple name='Cards Index' />
          <FormFileInputSimple name='Background Landing' />
        </MyFlexContainer>
        <MyFlexContainer>
          <FormFileInputSimple name='icon del curso' />
          <FormFileInputSimple name='banner promocion' />
        </MyFlexContainer>
      </InputGroup>
    </MyForm>
  );
}
