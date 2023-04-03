'use client'

import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';
import MyAssButton from '@/components/MyAssButton/MyAssButton';
import React, { useContext, useState } from 'react'
import postRequest from '@/helpers/postRequest';
import login from '../../interfaces/login';
import { appContext } from '@/context/AppContenxt';
import useMyErrList from '@/hooks/useMyErrList';
import {login as loginValidation} from '@/helpers/validations'
import MyInput from '@/components/MyInput/MyInput'
import { useRouter } from 'next/navigation';

export default function FormLogin({
  setErrMsg,
  setIsWrapping,
}: {
  setErrMsg: React.Dispatch<React.SetStateAction<boolean>>;
  setIsWrapping: React.Dispatch<React.SetStateAction<boolean>>;
}) 
{
  const [formData, setFormData] = useState<login>({ email: "", password: "" });
  const [errList] = useMyErrList(formData, loginValidation);
  const [load, setLoad] = useState<boolean>(false);
  const router = useRouter();

  const { setUser} = useContext(appContext);

  function submittingForm(e:any) 
  {
    e.preventDefault();

    if (errList !== "ok") return;

    const form = new FormData();
    form.append("correo", formData.email);
    form.append("clave", formData.password);

    setLoad(true);
    postRequest(form, "login").then((res) => {
      setLoad(false);
      if (res === false||res.tipo!=='ADMI') return setErrMsg(true);
      setIsWrapping(true)
      res.isLogin=true
      setUser(res);
      router.push("/");
    });
  }

  return (
    <form className={`flex flex-col gap-[2rem]`} onSubmit={submittingForm}>
      <MyInput
        placeHolder={"Email"}
        value={formData.email}
        icon={faEnvelope}
        err={errList?.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
      />
      <MyInput
        placeHolder={"Password"}
        value={formData.password}
        icon={faLock}
        err={errList?.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFormData((prev) => {
            return { ...prev, password: e.target.value };
          });
        }}
        type={'password'}
      />
      <MyAssButton
        type={"submit"}
        label={"LOGIN"}
        isLoad={load}
        disabled={errList !== "ok"}
      />
    </form>
  );
}




