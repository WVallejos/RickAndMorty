import { connect } from "react-redux"
import Cards from "../Cards/Cards"
import { filtrarCards, getFav, ordenarCards, resetCards } from "../../redux/action-creators"
import { useDispatch } from "react-redux"
import styles from './Favorites.module.css'
import { useEffect, useState } from "react"

function Favorites({myFavorites}) {

    const dispatch = useDispatch()
    const [selectedOrder, SetSelectedOrder] = useState('')
    const [selectedFilter, SetSelectedFilter] = useState('')

    const handleOrder = (evento) => {
        SetSelectedOrder(evento.target.value)
        if (evento.target.value === '') {
            dispatch(resetCards())
        } else{
            dispatch(ordenarCards(evento.target.value))}
        }
        
        const handleFilter = (evento) => {
        SetSelectedFilter(evento.target.value)
        if (evento.target.value === "") {
            dispatch(resetCards())
        } else {
        dispatch(filtrarCards(evento.target.value))}
    }

    const handleReset = () => {
        SetSelectedOrder('')
        SetSelectedFilter('')
        dispatch(resetCards())
    }

    // useEffect(() => {
    //     dispatch(getFav())
    // }, [])


    return <>
    <div className={styles.filters}>
    <div className={styles.inputs}>
    <select value={selectedOrder} className={styles.filter} onChange={handleOrder}>
        <option value="">No Order </option>
        <option value="ASC">Ascendente</option>
        <option value="DESC">Descendente</option>
    </select>
    <select value={selectedFilter} className={styles.filter} onChange={handleFilter}>
        <option value="">All</option>    
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