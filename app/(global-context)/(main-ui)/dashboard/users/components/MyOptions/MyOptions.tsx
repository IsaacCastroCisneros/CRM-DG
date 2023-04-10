import React, { useContext } from 'react'
import Options from '@/components/Options/Options';
import Option from '@/components/Option/Option';
import { appContext } from '@/context/AppContenxt';
import UserInfo from './components/UserInfo/UserInfo';
import EditUser from './components/EditUser/EditUser';
import DeleteUser from './components/DeleteUser/DeleteUser';
import ListUser from './components/ListUser/ListUser';
import { faBars, faEdit, faInfoCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';


export default function MyOptions({user}:{user:any}) 
{
  const{setShowPopup}=useContext(appContext)

  return (
    <Options>
        <>
          <Option
            icon={faInfoCircle}
            onClick={() =>
              setShowPopup({ show: true, popup:<UserInfo {...user} /> })
            }
            label={"informacion"}
          />
          <Option
            icon={faEdit}
            onClick={() =>
              setShowPopup({ show: true, popup:<EditUser {...user} /> })
            }
            label={`editar`}
          />
          <Option
            icon={faTrashCan}
            onClick={() =>
              setShowPopup({ show: true, popup:<DeleteUser {...user} /> })
            }
            label={`eliminar`}
          />
          <Option
            icon={faBars}
            onClick={() => setShowPopup({ show: true, popup:<ListUser /> })}
            label={`Lista`}
          />
        </>
      </Options>
  )
}
