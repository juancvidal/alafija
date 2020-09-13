import heroes, {owners} from '../data/heroes'
export const getHeroesById = (id) => {
    return heroes.find(element => element.id == id)
}

export const getHeroesByOwner = (owner) => {
    return heroes.filter(element => element.owner === owner)
}

//console.log(getHeroesById(2));
//console.log( getHeroesByOwner('DC'));