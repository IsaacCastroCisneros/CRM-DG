import { Dispatch, SetStateAction } from "react"
import curso from "./curso"

export default interface props
{
  values:curso
  setValues:Dispatch<SetStateAction<curso>>
}