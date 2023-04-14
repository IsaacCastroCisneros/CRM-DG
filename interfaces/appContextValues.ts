import popup from "./popup";

export default interface appContextValues
{
    showPopup:popup;
    setShowPopup:React.Dispatch<React.SetStateAction<popup>>
}
