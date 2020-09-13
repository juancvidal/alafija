const persona = {
    nombre : 'tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'new york',
        zip: 5552333,
        lat: 14.3222,
        lng: 34.922
    }
}

const persona2 = { ...persona};
persona2.nombre = 'Peter';
//console.table({persona});
console.log( persona2 );
console.log( persona );