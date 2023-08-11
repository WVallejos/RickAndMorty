import style from './App.module.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail'
import About from './components/About/About'
import Error from './components/Error/Error';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from "react-router-dom";




function App() {

   const [characters, setCharacters] = useState([])



   function onSearch(id) {
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
   }

   return (
      <div className={style.App}>
         <Nav onSearch={(id) => onSearch(id)} />
         <Routes>
            <Route path="/" element={<Cards characters={characters} onClose={(id) => onClose(id)} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />

         </Routes>


      </div>
   );
}

export default App;
