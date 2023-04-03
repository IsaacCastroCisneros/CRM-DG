export const DatosNav = [
    {
        id: 1,
        nombre: "dashboard",
        href: "/dashboard",
        tipo: null,
        icon: 'fa-solid fa-house',
        subMenu: []
    },
    {
        id: 2,
        nombre: "certificados",
        href: "/certificados",
        tipo: "certificados",
        icon: 'fa-solid fa-certificate',
        subMenu: [{
            id: 1,
            nombre: "Ver Certificados",
            href: "dashboard/certificados/vercertificados",
            tipo: "vercertificados"
        },{
            id: 2,
            nombre: "Creacion Masiva",
            href: "/dashboard/certificados/crearcertificado",
            tipo: "crearcertificado"
        }]
    },
    {
        id: 3,
        nombre: "prospectos",
        href: "/dashboard/prospectos",
        tipo: "prospectos",
        icon: 'fa-solid fa-list',
        subMenu: []
    },
    {
        id: 4,
        nombre: "pagos",
        href: "/pagos",
        tipo: "pagos",
        icon: 'fa-solid fa-money-bill',
        subMenu: []
    },
    {
        id: 5,
        nombre: "envios",
        href: "/envios",
        tipo: "envios",
        icon: 'fa-solid fa-money-bill',
        subMenu: []
    },
    {
        id: 5,
        nombre: "pendientes",
        href: "/pendientes",
        tipo: "pendientes",
        icon: 'fa-solid fa-money-bill',
        subMenu: []
    },
    {
        id: 5,
        nombre: "usuarios",
        href: "/usuarios",
        tipo: "usuarios",
        icon: 'fa-solid fa-money-bill',
        subMenu: []
    },

]