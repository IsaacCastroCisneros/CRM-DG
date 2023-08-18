import { MyFormInput } from '@/components/MyFormInput/MyFormInput'
import React, { Dispatch, SetStateAction, useState } from 'react'
import {v4 as uuid} from 'uuid'
import { MyForm } from '@/components/MyForm/MyForm';
import fullSession from '../interfaces/fullSession';

export default function CreateTitulo({setFullSessions}:{setFullSessions:Dispatch<SetStateAction<Array<fullSession>>>}) 
{ 
  const[values,setValues]=useState<{title:string}>({title:""})

  return (
    <>
      <MyForm
        label="Crear"
        values={values}
        setValues={setValues}
        submit={async () =>
          setFullSessions((prev) => [
            ...prev,
            { title: values.title, id: uuid(), sessions: [] },
          ])
        }
      >
        <MyFormInput
          name="Titulo"
          value={values.title}
          onChange={(e) => setValues(e.target.value)}
        />
      </MyForm>
    </>
  );
}
