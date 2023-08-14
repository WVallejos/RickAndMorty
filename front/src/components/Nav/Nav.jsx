import SearchBar from "../Search Bar/SearchBar";
import styles from './Nav.module.css'
import NavLink from "../NavLink/NavLink";
import logo from '../../images/RMtitle.png'

export default function Nav(props) {
    return <nav className={styles.nav}>
                <img className={styles.headerImg} src={logo} />
                <div className={styles.navbar}>
                <SearchBar onSearch={(id) => props.onSearch(id)} />
                    <NavLink to='/home'>
                    <span>HOME</span>
                    </NavLink>
                    <NavLink to='/about'>
                    <span>ABOUT</span>
                    </NavLink>
                    <button className={styles.button} onClick={() => props.logout()}>LOG OUT</button>
                </div>
            </nav>
}