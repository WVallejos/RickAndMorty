import style from './App.module.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Error from './components/Error/Error';
import Favorites from './components/Favorites/Favorites'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Form from './components/Form/Form';
import { removeFav } from './redux/action-creators';
import { connect } from 'react-redux';




function App({removeFav}) {

      // simulation of login and user validation
   const [wronguser, setWronguser] = useState(false)
   const [access, setAccess] = useState(false)
   const EMAIL = 'guille@awesome.com'
   const PASSWORD = 'awesome10'
   const navigate = useNavigate()

   function login(userData) {
      console.log(userData)
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      } else {
         setWronguser(true)
      }
   }

   function logout() {
      setAccess(false)
      navigate('/')
   }

   //variable que ayuda para el conditional rendering, en caso de que isLogin sea true, el nav no se renderiza
   
   
   const [characters, setCharacters] = useState([])
   
   function onSearch(id) {
      console.log(location.pathname)
      if (isNaN(Number(id))) return window.alert('ingresa un ID numerico !')
      if (!id) return window.alert('Ingresa un ID !')
      if ((characters.some(item => item.id === parseInt(id)))) {
         return window.alert('Ese personaje ya fue agregado !')
      }
      
      axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-wvallejos`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      })
      .catch(err => alert(err.response.data.error));
   }
   
   
   
   function onClose(id) {
      const filtered = characters.filter((el) => el.id != parseInt(id))
      setCharacters(filtered)
      removeFav(id)

   }
   
   // useEffect (() => {
   //    //console.log(userData);
   //    !access && navigate('/')
   // }, [access]) //runs again if access is different
   
   const location = useLocation()
   const isLogin = location.pathname === '/'
   
   return (
      <div className={style.App}>
         {!isLogin && <Nav onSearch={(id) => onSearch(id)} logout={logout} />}
         <Routes>
            <Route path='/' element={<Form login={login} wronguser={wronguser} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={(id) => onClose(id)} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path="*" element={<Error />} />

         </Routes>


      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(null, mapDispatchToProps)(App);
