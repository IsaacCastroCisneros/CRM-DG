import { ReactNode } from "react";

export default function validatingRequired(values:Record<any,any>,requirements:Array<{value:ReactNode,propertie:string}|string>):boolean
{
   const isValid=requirements.every(requirement=>
    {
      const finalRequirement =
      typeof requirement === "string"
      ? { propertie: requirement, value: "" }
      : requirement;

      return `${values[finalRequirement.propertie]}`!==`${finalRequirement.value}`
    }) 

   return isValid
}