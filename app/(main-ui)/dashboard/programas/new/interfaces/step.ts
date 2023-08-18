import { Dispatch, SetStateAction } from "react"
import curso from "./program"

export default interface props
{
  values:curso
  setValues:Dispatch<SetStateAction<curso>>
}