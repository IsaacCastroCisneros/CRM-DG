
export interface HolapROSP {
    menu: DataPros[];
}

export interface DataPros {
    id: number;
    nombre: string;
    logo: string;
    fecha: string;
    categoria: string;
    modalidad: string;
    prospectos: number
    alumnosPros: AlumnosPros[];
}

export interface AlumnosPros{
    id: number;
    nombre: string;
    medio: string;
    programa: string;
    modalidad: string;
    correo: string;
    fechaRegistro: string;
    estado: any
}


export interface DataAlumnos {
    id: number;
    nombre: string;
    logo: string;
    fecha: string;
    categoria: string;
    modalidad: string;
    prospectos: number
    alumnosPros: AlumnosPros2[];
}

export interface AlumnosPros2{
    id: number;
    nombre: string;
    correo: string;
    dni: string;
    telefono: string;
    estado: string;
    fechaRegistro: string;
}