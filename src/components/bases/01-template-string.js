const nombre = 'Juan';
const apellido = 'Vidal';

const getNombre = (nombre) => {
    return nombre;
}
const nombreCompleto = `hola mundo ${getNombre(nombre)} ${apellido}`;


console.log( nombreCompleto );