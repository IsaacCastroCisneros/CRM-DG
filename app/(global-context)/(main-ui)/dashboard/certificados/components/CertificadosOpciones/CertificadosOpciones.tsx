import Option from '@/components/Option/Option'
import Options from '@/components/Options/Options'
import { appContext } from '@/context/AppContenxt';
import React, { useContext } from 'react'
import EliminarCertificado from './components/EliminarCertificado';

export default function CertificadosOpciones({row}:{row:any}) 
{
  const{setShowPopup}=useContext(appContext)   

  return (
    <Options>
      <>
        <Option type="ver" label="ver" href={`/dashboard/certificados/${row.Id}`} />
        <Option
          type="delete"
          label="eliminar"
          onClick={() =>
            setShowPopup({
              show:true,
              popup: <EliminarCertificado name={row.nombre} />,
            })
          }
        />
      </>
    </Options>
  );
}
