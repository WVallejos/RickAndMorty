import SearchBar from "../Search Bar/SearchBar";
import styles from './Nav.module.css'

export default function Nav(props) {
    return <nav className={styles.nav}>
                <img className={styles.headerImg} src='https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png' />
                <SearchBar onSearch={(id) => props.onSearch(id)} />
            </nav>
}