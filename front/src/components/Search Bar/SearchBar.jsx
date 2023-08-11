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
      setId('')
    }
  };

 function handleClick() {
   const min = 1;
   const max = 100;
   const rand = Math.floor(min + Math.random() * (max - min));
   props.onSearch(rand)
 }

 function cleanInput(id) {
   props.onSearch(id)
   setId('')
 }


   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' value={id} onChange={handleChange} onKeyDown={handleKeypress}/>
         <button className={style.button} onClick={() => cleanInput(id)}>AGREGAR</button> 
         <button className={style.button} onClick={() => handleClick()}>RANDOM</button>
      </div>
   );// en onclick tiene que haber una funcion, y como onsearch necesita un parametro, si yo pongo onclick=onsearch() seria
   // una invocacion a una funcion, es por eso que deberia ser, una funcion que llama a la funcion onSearch
}
