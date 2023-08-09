import style from '../App.module.css'
import { useState } from 'react'
import '../index.css'


export default function Card(props) {
   const [selected, setSelected] = useState(null)

   const toggle = (id) => {
      if (selected === id) {
         return setSelected(null)
      }

      setSelected(id)
   }

   return (
      <div className={style.cardWrapper}>
         <div className={style.imgContainer}>
            <button className={style.buttonCard} onClick={props.onClose}>X</button>
            <img className={style.imgCard} src={props.image} alt='' />
         </div>
         <div className='accordion'>
            <div className='item'>
               <div className={style.cardTitle} onClick={() => toggle(props.id)}>
                  <h2>{props.name}</h2>
                  <h2>{selected === props.id ? '-' : '+'}</h2>
               </div>
               <div className={selected === props.id ? 'content show' : 'content'}>
                  <h3>{props.status}</h3>
                  <h3>{props.species}</h3>
                  <h3>{props.gender}</h3>
                  <h3>{props.origin}</h3>
               </div>
            </div>
         </div>
      </div>
   );
}
