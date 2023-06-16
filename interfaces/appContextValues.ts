import noti from "./noti";
import popup from "./popup";

export default interface appContextValues
{
    showPopup:popup;
    setShowPopup:React.Dispatch<React.SetStateAction<popup>>
    showNoti:noti
    setShowNoti:React.Dispatch<React.SetStateAction<noti>>
}
