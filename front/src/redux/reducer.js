import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, { ...action.payload }],
                allCharacters: [...state.allCharacters, { ...action.payload }]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((f) => f.id !== Number(action.payload))
            }
        case FILTER:
            console.log(state.myFavorites);
            return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: state.allCharacters.filter((f) => f.gender === action.payload)

            }
        case ORDER:
            let orderFunction =
                action.payload === 'ASC'
                    ? (a, b) => { return a.name > b.name ? 1 : -1 } //ASC
                    : (a, b) => { return a.name < b.name ? 1 : -1 } //DESC
            return {
                ...state,
                allCharacters: [...state.allCharacters],
                myFavorites: [...state.myFavorites.sort(orderFunction)]

            }
        default:
            return {
                ...state
            }

    }
}

export default rootReducer