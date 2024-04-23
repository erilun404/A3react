import styles from './Header.module.css'
import HeroImg from '../HeroImage'

const Header = ({page, game}) => {
   return (
        <>
            <HeroImg page={page} />
            <h1 className={styles.header}>{game}</h1>
        </>     
    )
}
export default Header