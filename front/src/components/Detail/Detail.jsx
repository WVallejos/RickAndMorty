import { useParams } from 'react-router-dom';
import styles from './Detail.module.css'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';

function Items({ label, value }) {
    if (typeof value === 'object') value = value.name
    if (value) {
        return <div className={styles.detailItem}>
            <span>{label}</span>
            <span>{value}</span>
        </div>

    } else {
        return
    }

}

export default function Detail(props) {

    const { id } = useParams()

    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`https://rym2-production.up.railway.app/api/character/${id}?key=henrym-wvallejos`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return <div className={styles.detail} >
        <div className={styles.detailItems}>
            <h1 className={styles.detailName} >{character.name}</h1>
            <Items label='Gender: ' value={character.gender} />
            <Items label='Status: ' value={character.status} />
            <Items label='Species: ' value={character.species} />
            <Items label='Type: ' value={character.type} />
            <Items label='Origin: ' value={character.origin} />
            <Items label='Location: ' value={character.location} />
        </div>
        <div className={styles.detailImg}>
            <img src={character.image} />
        </div>
    </div>
}