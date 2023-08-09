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
            <div>
               <div className={style.cardHeader } onClick={() => toggle(props.id)}>
                  <h2 className={style.cardTitle}>{props.name}</h2>
                  <h2 className={style.cardTitle}>{selected === props.id ? '-' : '+'}</h2>
               </div>
               <div className={selected === props.id ? 'content show' : 'content'}>
                  <div className={style.contentCard}>
                     <span className={style.cardItem}>{props.status}</span>
                     <span className={style.cardItem}>{props.species}</span>
                     <span className={style.cardItem}>{props.gender}</span>
                     <span className={style.cardItem}>{props.origin}</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
