import { connect } from "react-redux"
import Cards from "../Cards/Cards"
import { filtrarCards, ordenarCards, resetCards } from "../../redux/action-creators"
import { useDispatch } from "react-redux"
import styles from './Favorites.module.css'

function Favorites({myFavorites}) {

    const dispatch = useDispatch()

    const handleOrder = (evento) => {
        if (evento.target.value === 'All') {
            dispatch(resetCards())
        } else{
        dispatch(ordenarCards(evento.target.value))}
    }

    const handleFilter = (evento) => {
        console.log(evento.target.value);
        if (evento.target.value === 'All') {
            dispatch(resetCards())
        } else {
        dispatch(filtrarCards(evento.target.value))}
    }

    const handleReset = () => {
        dispatch(resetCards())
    }


    return <>
    <div className={styles.filters}>
    <div className={styles.inputs}>
    <select onChange={handleOrder}>
        <option value="All"> </option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
    </select>
    <select onChange={handleFilter}>
        <option value="All">All</option>    
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">Unknown</option>
    </select>
    </div>
    <button className={styles.button} onClick={handleReset}>Reset Filters</button>

    </div>
    <Cards characters={myFavorites} />
    </>
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)