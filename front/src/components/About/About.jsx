import styles from '../Detail/Detail.module.css'
import pic from '../../images/gorickyourself.png'

const willy = {name:"Guille Vallejos",status:"Single",species:"Human",type:"Awesome",gender:"Male",origin:"Earth (C-137)",location:"La Plata, Buenos Aires, Argentina"}

function ItemsAbout({ label, value }) {
        return <div className={styles.detailItem}>
            <span>{label}</span>
            <span>{value}</span>
        </div>
}





export default function About(props) {
    return <div className={styles.detail} >
        <div className={styles.detailItems}>
            <h1 className={styles.detailName} >{willy.name}</h1>
            <ItemsAbout label='Gender: ' value={willy.gender} />
            <ItemsAbout label='Status: ' value={willy.status} />
            <ItemsAbout label='Species: ' value={willy.species} />
            <ItemsAbout label='Type: ' value={willy.type} />
            <ItemsAbout label='Origin: ' value={willy.origin} />
            <ItemsAbout label='Location: ' value={willy.location} />
        </div>
        <div className={styles.detailImg}>
            <img src={pic} />
        </div>
    </div>
}