"use client";

import { DatosNav } from "@/helpers/DatosNav";
import Link from "next/link";
import { useState } from "react";
import ActivateLink from "./ActivateLink";

export const BarraMenu = () => {
  const [subMenu, setSubMenu] = useState<boolean>(false);

  const AbrirMenu = () => {
    setSubMenu(!subMenu);
  };

  return (
    <div className="w-full">
      <div className="bg-bg-fondonav p-5 bg-no-repeat">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className="w-12 rounded-full mx-auto mt-4"
        />
        <h3 className="text-dark text-center font-medium mt-3">Martin Rios</h3>
        <h4 className="text-center">prueba@hotmail.com</h4>
      </div>
      <div className="mb-5 space-y-2 px-6">
        <h4 className="text-gray-500 font-medium mb-5 text-xs">NAVEGACION</h4>

        <ActivateLink menu={DatosNav} />


      </div>
    </div>
  );
};
