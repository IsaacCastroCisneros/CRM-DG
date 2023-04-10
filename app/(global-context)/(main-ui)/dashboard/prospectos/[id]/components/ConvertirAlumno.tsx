import Swal from 'sweetalert2'
export const ConvertirAlumno = () => {
    const convertir = () => {
        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    }
    return (
        <button onClick={convertir}><img src="/img/gif/alumno.gif" alt="" width={40} /></button>
    )
}