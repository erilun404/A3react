import { Characters as Character } from "../../Data";
import image from '../../assets/Menja.jpg'
const Menja = () => {
    return (
        <div>
            <img src={image} alt="Menja" height="200px"/>
            <h2>{Character[1].game}</h2>
            <h3>{Character[1].name}</h3>
            <p>{Character[1].belongings}</p>
            <p>{Character[1].type}</p>
            <p>{Character[1].weapon}</p>
        </div>
    )
}

export default Menja;