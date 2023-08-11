import SearchBar from "../Search Bar/SearchBar";
import styles from './Nav.module.css'
import NavLink from "../NavLink/NavLink";

export default function Nav(props) {
    return <nav className={styles.nav}>
                <img className={styles.headerImg} src='https://www.freepnglogos.com/uploads/rick-and-morty-png/list-rick-and-morty-episodes-wikipedia-24.png' />
                <div className={styles.navbar}>
                <SearchBar onSearch={(id) => props.onSearch(id)} />
                <NavLink to='/'>
                    <span>HOME</span>
                    </NavLink>
                    <NavLink to='/about'>
                    <span>ABOUT</span>
                    </NavLink>
                </div>
            </nav>
}