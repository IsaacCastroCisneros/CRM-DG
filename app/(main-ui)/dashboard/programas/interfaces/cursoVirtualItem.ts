import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";

export default interface cursoVirtualItem
{
  title:string,
  description:string,
  buttons:ReactNode,
  icon:IconProp,
  
}