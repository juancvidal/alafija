import {getHeroesById} from '../bases/08-imports-exports'
/*const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesById(2);
        //console.log(heroe);
        resolve(heroe);
        //reject('No se pudo')
        //console.log('2 segundos despues');
    }, 2000)
});

promesa.then((heroe) => {
    console.log('heroe', heroe);
})
.catch(err => console.warn(err));*/
const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if(heroe)
            //console.log(heroe);
            resolve(heroe);
            else
             reject('No se pudo')
            //console.log('2 segundos despues');
        }, 2000);
    })
}
getHeroesByIdAsync(4)
//.then(heroe => console.log('Heroe', heroe) )
.then(console.log)
//.catch(err => console.warn(err))
.catch(console.warn)//es igual que la linea de arriba como se esta enviando el mismo argumento ent se simplifica