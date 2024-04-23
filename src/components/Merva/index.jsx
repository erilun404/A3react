import { Characters as Character } from "../../Data"
import image from '../../assets/Merva.jpg'
import '../../App.css'
const Merva = () => {
    return (
        <div className="character">
            <img className="image" src={image} alt="Merva" height="200px"/>
            <h3>{Character[0].name}</h3>
            <p>Inventory: {Character[0].belongings}</p>
            <p>Type of class: {Character[0].type}</p>
            <p>Weapon: {Character[0].weapon}</p>
        </div>
    )
}
export default Merva