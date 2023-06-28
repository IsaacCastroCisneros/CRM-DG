import file from "@/interfaces/file"
import { InputHTMLAttributes } from "react"

export default interface formFileInputProps extends InputHTMLAttributes<HTMLInputElement>
{
  state:(prev:any)=>void
  files:Array<file>
}