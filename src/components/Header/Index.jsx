import styles from './Header.module.css'

const Header = ({page}) => {
    return (
        <h1 className={styles.header}>{page}</h1>   
    )
}

export default Header