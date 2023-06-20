export default interface question
{
  question:string
  id:string
  options:Array<string>
  [key:string]:Array<string>|string
}