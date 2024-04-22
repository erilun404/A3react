import { Characters as Character } from "../../Data";
import image from '../../assets/Menja.jpg'
import '../../App.css'
const Menja = () => {
    return (
        <div className="character">
            <img className="image" src={image} alt="Menja" height="200px"/>
            <h3>{Character[1].name}</h3>
            <p>Inventory: {Character[1].belongings}</p>
            <p>Type of class: {Character[1].type}</p>
            <p>Weapon: {Character[1].weapon}</p>
        </div>
    )
}

export default Menja;