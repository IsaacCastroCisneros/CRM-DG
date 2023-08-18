import { Dispatch, SetStateAction } from "react";
import alumno from "./alumno";

export default interface stepFragment 
{
  setValues: Dispatch<SetStateAction<alumno>>;
  values: alumno;
}