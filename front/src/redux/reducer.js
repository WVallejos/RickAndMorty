import { ADD_FAV, FILTER, GET_FAV, ORDER, REMOVE_FAV, RESET } from "./action-types.js";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_FAV:
            return { ...state, myFavorites: action.payload }
        case ADD_FAV:
            return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: action.payload };
        case FILTER:
            console.log(state.myFavorites);
            return {
                ...state,
                myFavorites: state.allCharacters.filter((f) => f.gender === action.payload)

            }
        case ORDER:
            let orderFunction =
                action.payload === 'ASC'
                    ? (a, b) => { return a.id > b.id ? 1 : -1 } //ASC
                    : (a, b) => { return a.id < b.id ? 1 : -1 } //DESC
            return {
                ...state,
                myFavorites: [...state.myFavorites.sort(orderFunction)]

            }
        case RESET:
            return {
                ...state,
                myFavorites: [...state.allCharacters]
            }
        default:
            return {
                ...state
            }

    }
}

export default rootReducer