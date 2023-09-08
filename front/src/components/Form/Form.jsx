import { useState } from "react"
import {validateInputs} from '../../validations.js'
import styles from './Form.module.css'
import loginpic from '../../images/login.jpeg'


export default function Form(props) {

    const [userData, setUserData] = useState({email:'', password:''})

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const {name, value} = event.target
        setUserData({...userData,[name]:value})
        // de forma dinamica, en caso de que sean varios inputs que cambiar
        // setUserData({...userData, [event.target.name] : event.target.value})
        setErrors(validateInputs(event.target, errors))
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        props.login(userData)
        setUserData({email:'', password:''})
        

    }

    return <div className={styles.loginContainer} >
            <img src={loginpic} alt="logo" className={styles.loginImg} ></img>
            <form className={styles.loginForm} onSubmit={handleSubmit} >
                <label htmlFor='email' className={styles.label}>Email</label>
                <input className={styles.inputField} type="text" id='email' name="email" value={userData.email} placeholder="Email" onChange={handleChange}/>
                {errors.email && <small className={styles.small} >{errors.email}</small>}
                <label htmlFor='password' className={styles.label}>Password</label>
                <input className={styles.inputField} type="password" id='passwordx`' name="password" value={userData.password} placeholder="Password" onChange={handleChange}/>
                {errors.password && <small className={styles.small} >{errors.password}</small>}
                <input className={styles.submit} type="submit" value='Log In'/>
                {props.wronguser && <small className={styles.small} >'the username or password are incorrect'</small>}
            </form>
        
        </div>
}