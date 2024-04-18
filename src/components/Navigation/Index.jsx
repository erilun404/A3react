import NavItem from "./NavItem/Index"
import styles from './Navigation.module.css'

const Navigation = ({ navigationUpdateFunction }) => {
    return (
        <>
 
        <div className={styles.navigation}> {/*can i use map here*/ }
            <NavItem title="home" setCharacter={navigationUpdateFunction} />
            <NavItem title="merva" setCharacter={navigationUpdateFunction} />
            <NavItem title="menja" setCharacter={navigationUpdateFunction}/> 
        </div>
        </>
     
    )
}

export default Navigation
