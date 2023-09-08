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




function App({ removeFav }) {
   const URL_BASE = 'http://localhost:3001/rickandmorty'
   const [wronguser, setWronguser] = useState(false)
   const [access, setAccess] = useState(false)
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate()
   

   // function login(userData) {
   //    console.log(userData)
   //    if (userData.password === PASSWORD && userData.email === EMAIL) {
   //       setAccess(true);
   //       navigate('/home');
   //    } else {
   //       setWronguser(true)
   //    }
   // }
   async function login(userData) {
      const { email, password } = userData;
      // axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      //    const { access } = data;
      //    setAccess(data);
      //    access && navigate('/home');
      //    setWronguser(true)
      // });
      try {
         const { data } = await axios(`${URL_BASE}/login?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
         setWronguser(true)
      } catch (error) {
         console.log(error);
         setWronguser(true)

      }
   }

   function logout() {
      setAccess(false)
      navigate('/')
   }

   //variable que ayuda para el conditional rendering, en caso de que isLogin sea true, el nav no se renderiza



   async function onSearch(id) {
      if (isNaN(Number(id))) return window.alert('ingresa un ID numerico !')
      if (!id) return window.alert('Ingresa un ID !')
      if ((characters.some(item => item.id === parseInt(id)))) {
         return window.alert('Ese personaje ya fue agregado !')
      }
      // Promesas
      // axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      //    if (data.name) {
      //       setCharacters((oldChars) => [...oldChars, data]);
      //    }
      // })
      // .catch(err => alert(err.response.data.error));

      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         setCharacters((oldChars) => [...oldChars, data]);
      } catch (error) {
         alert(error.response.data)
      }
   }


   function onClose(id) {
      removeFav(id)
      const filtered = characters.filter((el) => el.id != parseInt(id))
      setCharacters(filtered)

   }

   // useEffect (() => {
   //    console.log(access);
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
