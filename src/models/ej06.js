let miUrl = null
let miObjeto = null
miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
miObjeto = parsearUrl(miUrl)
console.log(miObjeto)
function parsearUrl(laURL) {
    try {
        let ObjUrl = new URL(laURL)
        const miObjeto = {
            host: ObjUrl.host,
            pathname: ObjUrl.pathname,
            parametros: new URLSearchParams(ObjUrl.search)
        }
        return (miObjeto);
    } catch {
        return ('Error al parsear la URL')
    }
}