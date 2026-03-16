import fs from 'fs';
const ARCHIVO_ENTRADA = "./archivo-entrada.txt";
const ARCHIVO_SALIDA = "./archivo-salida.txt";
console.clear();
copiar(ARCHIVO_ENTRADA, ARCHIVO_SALIDA);

function copiar(origen, destino) {
    try {
        fs.copyFileSync(origen, destino)

    } catch (ex){
        console.log("No salió: " + ex.message)

    }
}

