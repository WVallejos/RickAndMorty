import style from './Card.module.css'
import { useState, useEffect } from 'react'
import '../../index.css'
import { NavLink, useLocation } from 'react-router-dom'
import { addFav, removeFav } from '../../redux/action-creators'
import { connect } from 'react-redux'


function Card(props) {

   const [selected, setSelected] = useState(null)

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         props.removeFav(props.id)
      } else {
         setIsFav(true)
         props.addFav(props)
      }
   }

   const toggle = (id) => {
      if (selected === id) {
         return setSelected(null)
      }

      setSelected(id)
   }

   useEffect(() => {
      console.log('cambio');
      console.log(props.myFavorites);
      setIsFav(false)
      props.myFavorites.forEach((fav) => {
         console.log(isFav);
         console.log(props.id);
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const location = useLocation()


   return (

      <div className={style.cardWrapper}>
         <div className={style.imgContainer}>
            { location.pathname === '/home' && (<button className={style.buttonCard} onClick={() => props.onClose(props.id)}>X</button>)}
            <img className={style.imgCard} src={props.image} alt='' />
         </div>
         <div className='accordion'>
            <div>
               <div className={style.cardHeader}>
                  <span className={style.cardTitle}>{props.name}</span>
                  {isFav ? (<button className={style.heart} onClick={handleFavorite}>❤️</button>) : (<button className={style.heart} onClick={handleFavorite}>🤍</button>)}
                  <span id={style.verMas} onClick={() => toggle(props.id)} className={style.cardTitle}>{selected === props.id ? '-' : '+'}</span>
               </div>
               <div className={selected === props.id ? 'content show' : 'content'}>
                  <div className={style.contentCard}>
                     <span className={style.cardItem}>ID: {props.id}</span>
                     <span className={style.cardItem}>Gender: {props.gender}</span>
                     <span className={style.cardItem}>Species: {props.species}</span>
                     <NavLink to={`/detail/${props.id}`} style={({ isActive }) => isActive ? { color: 'white' } : { color: 'white' }}>
                        <span className={style.cardItem}>Ver mas...</span>
                     </NavLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return {
      addFav: (personaje) => dispatch(addFav(personaje)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);