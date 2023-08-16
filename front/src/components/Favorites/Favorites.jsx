import { connect } from "react-redux"
import Cards from "../Cards/Cards"

function Favorites({myFavorites}) {
    return <>
    <Cards characters={myFavorites} />
    </>
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)