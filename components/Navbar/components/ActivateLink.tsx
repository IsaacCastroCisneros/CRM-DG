"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from 'next/navigation';
import { DataNav } from "../interfaces/interfaceNav";
import { useState } from "react";

export default function ActivateLink({ menu }: DataNav) {
    const valores = useSelectedLayoutSegments();

    const [condicional, setCondicional] = useState<string>("");
    const segment = valores[valores.length - 1]
    return (
        <>
            {menu.map((datos) => (
                <>
                    <Link href={datos.href}>
                        <p className={` ${valores[valores.length - 1] == datos.tipo && "text-activate"
                            } text-dark py-2 rounded-md text-base font-medium flex items-center gap-3 w-full px-2 h-full uppercase`}>
                            <i className={datos.icon}></i>{datos.nombre}
                        </p>
                    </Link>
                    <div className="p-0 !m-0 space-y-2 !mb-1">
                        {datos?.subMenu?.map((submenu) => (

                            <Link
                            key={submenu.id}
                                href={submenu.href}
                                className={`${submenu.tipo == segment && "text-activate"
                                    } mx-9 w-10/12 block`}
                            >
                                {submenu.nombre}
                            </Link>

                        ))}
                    </div>
                </>
            ))}
        </>
    );
}
