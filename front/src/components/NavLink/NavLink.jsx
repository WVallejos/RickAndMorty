import { NavLink as NavLinkDom} from "react-router-dom";
import styles from './NavLink.module.css'


export default function NavLink ({to, children, ...props}) {

    return (
        <NavLinkDom
        {...props}
        to={to}
        className={({isActive}) => 
        (isActive ? styles.isActive : styles.isInactive)} >
            {children}
        </NavLinkDom>
    )
}