import { connect } from "react-redux"
import Cards from "../Cards/Cards"
import { filtrarCards, ordenarCards } from "../../redux/action-creators"
import { useDispatch } from "react-redux"

function Favorites({myFavorites}) {

    const dispatch = useDispatch()

    const handleOrder = (evento) => {
        dispatch(ordenarCards(evento.target.value))
    }

    const handleFilter = (evento) => {
        console.log(evento.target.value);
        dispatch(filtrarCards(evento.target.value))
    }


    return <>
    <select onChange={handleOrder}>
    <option value="ASC">Ascendente</option>
    <option value="DESC">Descendente</option>
    </select>
    <select onChange={handleFilter}>
    <option value="Male">Male</option>
    <option value="Female">Female</option>
    <option value="Genderless">Genderless</option>
    <option value="unknown">Unknown</option>
    </select>
    <Cards characters={myFavorites} />
    </>
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)