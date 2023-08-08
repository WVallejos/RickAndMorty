export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
         <button onClick={(id) => {props.onSearch(id)}}>Agregar</button> 
      </div>
   );// en onclick tiene que haber una funcion, y como onsearch necesita un parametro, si yo pongo onclick=onsearch() seria
   // una invocacion a una funcion, es por eso que deberia ser, una funcion que llama a la funcion onSearch
}
