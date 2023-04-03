import Option from '@/components/Option/Option'
import Options from '@/components/Options/Options'
import { appContext } from '@/context/AppContenxt'
import React, { useContext } from 'react'
import EditDataEnvio from './components/EditDataEnvio'

export const myOptions = React.createContext<values>({user:''})

interface values
{
  user:any
}

export default function MyOptions({user}:{user:any}) 
{
  const{setShowPopup}=useContext(appContext)  

  const values:values=
  {
    user
  }

  return (
    <myOptions.Provider value={values}>
      <Options>
        <>
          <Option
            type="edit"
            label="Editar"
            onClick={() =>
              setShowPopup({ show: true, popup: <EditDataEnvio user={user} /> })
            }
          />
        </>
      </Options>
    </myOptions.Provider>
  );
}
