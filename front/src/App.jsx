import style from './App.module.css';
// import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
   

function App() {

   const [characters, setCharacters] = useState([])

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   function onSearch(id) {
      axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-wvallejos`).then(({ data }) => {
         if (data.name && !(characters.some(item => item.id === data.id))) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID o el personaje ya fue agregado !');
         }
      });
   }

   function onClose(id) {
      const filtered = characters.filter((el) => el.id != parseInt(id))
      setCharacters(filtered)
   }

   return (
      <div className={style.App}>
         <Nav onSearch = {(id) => onSearch(id) } />
         <Cards characters={characters} onClose={(id)=>onClose(id)} />
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
