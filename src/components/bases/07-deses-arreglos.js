const personajes = ['goku','vegeta','truns'];
const [ , ,p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
   return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

const useState = (valor) => {
    return [valor, ()=>{console.log('hola mundo')}];
}

const [nombre,setNombre] = useState('goku');

console.log(nombre);
setNombre();