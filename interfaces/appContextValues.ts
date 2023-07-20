import { Dispatch, SetStateAction } from "react";
import noti from "./noti";
import popup from "./popup";
import sideMenu from "./sideMenu";

export default interface appContextValues
{
    showPopup:popup;
    setShowPopup:Dispatch<SetStateAction<popup>>
    showNoti:noti
    setShowNoti:Dispatch<SetStateAction<noti>>
    showSideMenu:sideMenu
    setShowSideMenu:Dispatch<SetStateAction<sideMenu>>
}
