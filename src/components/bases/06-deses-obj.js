const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
    
}

const useContext = ({edad, clave, nombre, rango = 'Capitan'}) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat:13.45,
            lng:13.45
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);