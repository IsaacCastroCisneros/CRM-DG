import popup from "./popup";
import user from "./user";

export default interface appContextValues
{
    user:user|undefined;
    setUser:React.Dispatch<React.SetStateAction<user | undefined>>;
    showPopup:popup;
    setShowPopup:React.Dispatch<React.SetStateAction<popup>>
}
