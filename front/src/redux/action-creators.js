import {GET_FAV, ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET} from './action-types'
import axios from 'axios'

const URL_BASE = 'http://localhost:3001/rickandmorty'

export function addFav(character){
  return async (dispatch) => {
     try {
           const {data} = await axios.post(`${URL_BASE}/fav`, character)
            return dispatch({
                 type: 'ADD_FAV',
                 payload: data,
              });
           
        } catch (error) {
           alert(error.message)
        }
};
  
}

export function getFav(){
  const endpoint = `${URL_BASE}/favorites`;
  return (dispatch) => {
     axios.get(endpoint).then(({ data }) => {
        return dispatch({
           type: GET_FAV,
           payload: data,
        });
     });
  };
}

export function removeFav(id) {
  return async (dispatch) => {
   try {
      const {data} = await axios.delete(`${URL_BASE}/fav/${id}`)
         return dispatch({
            type: 'REMOVE_FAV',
            payload: data,
      });
   } catch (error) {
      alert(error.message)
   }
  };
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