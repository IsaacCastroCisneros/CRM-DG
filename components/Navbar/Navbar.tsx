'use client'

import { appContext } from "@/context/AppContenxt"
import appContextValues from "@/interfaces/appContextValues"
import React from "react"
import { useContext } from "react"
import UserMenu from "../UserMenu/UserMenu"
import { BarraMenu } from "./components/BarraMenu"

export const navbarContext = React.createContext<appContextValues>(
  {user:
    {
     avatar:'',
     correo:'',
     id:'',
     nombre:'',
     tipo:'',
     token:'',
    },
    setUser:()=>null  
  })

export default function Navbar() 
{
    const{user,setUser}=useContext<appContextValues>(appContext)

    const values=
    {
      user,
      setUser
    }

    return (
        <navbarContext.Provider value={values}>
            <div className="bg-navBar">
                <div className="mx-auto container px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex justify-between gap-4 ">
                            <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img className="block h-12 w-auto lg:hidden" src="https://nuevapagina.s3.amazonaws.com/DG-Logotipo2-Blanco.png" alt="Desarrollo Global" />
                                    <img className="hidden h-9 w-auto lg:block" src="https://nuevapagina.s3.amazonaws.com/DG-Logotipo_Blanco.png" alt="Desarrollo Global" />
                                </div>
                            </div>
                            <div className="flex items-center sm:hidden">
                                {/*Hmabrugesa*/}
                                <input type="checkbox" id="hamburguesa2" className="peer" hidden />
                                <label htmlFor="hamburguesa2" className="flex flex-col justify-center rounded-md p-2 text-white hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <div className="h-0.5 w-4 bg-white transition"></div>
                                    <div className="h-0.5 w-5 bg-white transition mt-1"></div>
                                    <div className="h-0.5 w-4 bg-white transition mt-1"></div>
                                </label>
                                <div className="bg-white shadow-lg absolute top-full translate-x-[-150%] transition peer-checked:translate-x-[-34%] w-64 z-z-100">
                                    <BarraMenu />
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 h-[100%] gap-[1rem]">
                            {/*vcer notificaciones*/}
                            <button type="button" className="relative rounded-full bg-navBar p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                                <div className="absolute w-2 h-2 bg-red-600 top-0 left-3/4 rounded-full"></div>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </button>
                            {
                              user&&<UserMenu user={user}/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </navbarContext.Provider>

    )
}


