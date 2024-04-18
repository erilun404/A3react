import { Characters as Character } from "../../Data"
import image from '../../assets/Merva.jpg'

const Merva = () => {
    
    console.log(Character[0])
    return (
        <div>
            <img src={image} alt="Merva" height="200px"/>
            <h2>{Character[0].game}</h2>
            <h3>{Character[0].name}</h3>
            <p>{Character[0].belongings}</p>
            <p>{Character[0].type}</p>
            <p>{Character[0].weapon}</p>
        </div>
    )
}

export default Merva