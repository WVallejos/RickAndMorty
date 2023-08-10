import style from './SearchBar.module.css'
import { useState } from 'react';
export default function SearchBar(props) {

   const [id, setId] = useState('')

   function handleChange(event) {
      setId(event.target.value)
   }

   const handleKeypress = (event) => {
      //it triggers by pressing the enter key
    if (event.keyCode === 13) {
      props.onSearch(id);
    }
  };

 function handleClick() {
   const min = 1;
   const max = 100;
   const rand = Math.floor(min + Math.random() * (max - min));
   console.log(rand);
   props.onSearch(rand)
 }


   return (
      <div className={style.searchBar}>
         <input type='search' value={id} onInput={handleChange} onKeyDown={handleKeypress}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button> 
         <button onClick={() => handleClick()}>Agregar Random</button>
      </div>
   );// en onclick tiene que haber una funcion, y como onsearch necesita un parametro, si yo pongo onclick=onsearch() seria
   // una invocacion a una funcion, es por eso que deberia ser, una funcion que llama a la funcion onSearch
}
