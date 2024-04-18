
const NavItem = ({title, setCharacter}) => {
    const handleClick = () => {
        (title === "home" ? setCharacter(null) : setCharacter(title))
        console.log(title)
    }
    return (
        <div onClick={handleClick}> {title}</div>
    )
}

export default NavItem