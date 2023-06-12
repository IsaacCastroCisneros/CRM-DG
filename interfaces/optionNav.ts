import { IconProp } from "@fortawesome/fontawesome-svg-core"
import submenu from "./submenu"

export default interface optionNav
{
 href:string
 label:string
 icon:IconProp
 submenu?:Array<submenu>
}