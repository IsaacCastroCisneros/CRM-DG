import React from 'react';
import showPassword from '../../interfaces/showPassword';
import onlyNumFunc from '@/helpers/onlyNumFunc';
import onlyTextFunc from '@/helpers/onlyTextFunc';
import { useField, useFormikContext } from 'formik';
import myNormalInput from '@/styles/myNormalInput';

interface props
{
  name:string,
  onlyText:boolean,
  readonly:boolean,
  type:string,
  stylesInput:string,
  options:Array<string>,
  showPassword:showPassword,
  label:string,
  onChange:(e:any)=>void,
  validate:(input:any)=>string|undefined,
  error?:boolean,
}

export default function MyAwesomeField(props:props)
{
  const
  {
    name,
    onlyText,
    readonly,
    type,
    stylesInput,
    options,
    showPassword,
    onChange,
    label,
    error
  }=props

  const{setFieldValue,errors,values}:any=useFormikContext()
  const[field]=useField<any>(props)

  let myError:boolean|undefined =error

  if(!error)
  {
    myError=errors ? errors[field.name]:false
  }

  const styles =`${myNormalInput} ${myError?'!border-red-500':'!border-inputBorder'}`


  return (
    <>
      {options.length === 0 && (
        <input
          name={name}
          className={`${styles} ${stylesInput} ${
            readonly ? "bg-[#eee] pointer-events-none" : ""
          }`}
          readOnly={readonly}
          size={1}
          type={showPassword.type}
          onKeyPress={(e: any) => {
            if (type === "number") onlyNumFunc(e);
            if (onlyText) onlyTextFunc(e);
          }}
          onChange={(e)=>myOnChangeFunc(e,setFieldValue,onChange,field)}
          value={values[name]}
          min={0}
        />
      )}
      {options.length > 0 && (
        <select
          className={styles}
          size={0}
          onChange={(e)=>myOnChangeFunc(e,setFieldValue,onChange,field)}
        >
          <option value={"none"}>Selecciona {label}</option>
          {options.map((opt, pos) => {
            return (
              <option key={pos} value={opt}>
                {opt}
              </option>
            );
          })}
        </select>
      )}
    </>
  );
}

function myOnChangeFunc(e:any,setFieldValue:any,onChange:(e:any)=>void,field:any)
{
    setFieldValue(field.name, e.target.value);
    onChange(e);
}