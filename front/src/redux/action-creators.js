import {ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from './action-types'

export function addFav(personaje){
    return {
        type: ADD_FAV,
        payload: personaje
    }
}

export function removeFav(id) {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export function filtrarCards(gender){
    console.log(gender);
    return {
      type: FILTER,
      payload: gender
    }
  }
  
  
  
  export function ordenarCards(orden){
    return {
      type: ORDER,
      payload: orden
    }
  }

  export function resetCards(){
    return {
        type: RESET,
    }
  }