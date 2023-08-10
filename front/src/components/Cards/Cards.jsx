import Card from '../Card/Card';
import style from './Cards.module.css'

export default function Cards(props) {
   return <div className={style.listItem}>
      {props.characters.map((character,i) => (<Card
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={(id) => props.onClose(id)}
            key = {i}
         />))}
   </div>;
}
