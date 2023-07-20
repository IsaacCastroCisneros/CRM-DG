import subOption from "./subOption"

export default interface option
{
   label:string
   path?:string
   options?:Array<subOption>
}