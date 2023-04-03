
export const  ParseoFecha = (dateStr: any) =>  {
    let parts = dateStr.split("-")
    if (parts[0].length == 4) {
        return new Date(parts[0], parts[1] - 1, parts[2]).getTime()
    } else {
        return new Date(parts[2], parts[1] - 1, parts[0]).getTime()
    }
}