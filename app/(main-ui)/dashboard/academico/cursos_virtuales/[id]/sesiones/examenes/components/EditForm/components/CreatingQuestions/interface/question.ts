import option from "./options"

export default interface question
{
  question:string
  id:string
  options:Array<option>
  [key:string]:Array<option>|string
}
