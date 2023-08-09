import Card from './Card';
import style from '../App.module.css'

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
            onClose={() => window.alert('Emulamos que se cierra la card')}
            key = {i}
         />))}
   </div>;
}
