import React from "react";
import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import myNormalInput from "@/styles/myNormalInput";

const DatePickerField = ({ ...props }:any) => 
{
  const{readonly=false}=props
  const { setFieldValue,errors }:any = useFormikContext();
  const [field] = useField<any>(props);

  const myError = errors ? errors[field.name] :false

  return (
    <DatePicker
      {...field}
      {...props}
      readOnly={readonly}
      className={`${myNormalInput} ${myError?'!border-red-500':'!border-inputBorder'}`}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val:any) => {
        setFieldValue(field.name, val);
      }}
    />
  );
}

export default DatePickerField
