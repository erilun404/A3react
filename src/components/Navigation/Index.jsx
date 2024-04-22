import NavItem from "./NavItem/Index"
import styles from './Navigation.module.css'

const Navigation = ({ navigationUpdateFunction }) => {
    const mapNavItem = ["home", "merva", "menja"]
    return (
        <>
        <div className={styles.navigation}>
            {mapNavItem.map(item => 
                <NavItem 
                key={item} 
                title={item} 
                setCharacter={navigationUpdateFunction} />
            )}
        </div>
        </>
    )
}

export default Navigation
