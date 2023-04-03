export interface DataNav {
    menu: Hola[];
}

interface Hola {
    id: number;
    nombre: string;
    href: string;
    tipo: any;
    icon: string;
    subMenu?: SubMenu[];
}

interface SubMenu{
    id: number;
    nombre: string;
    href: string;
    tipo: string
}

