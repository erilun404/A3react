import imageDnd from '../../assets/Dnd.jpg'
import imageMutant from '../../assets/Mutant.jpg'
import imageGame from '../../assets/roll.jpg'

const HeroImg = ({page}) => {
    return(
    <>
        {page === null && <img className='heroImg' src={imageGame} alt='games' ></img>}
        {page === "menja" && <img className='heroImg' src={imageMutant} alt='mutant'></img>}
        {page === "merva" && <img className='heroImg' src={imageDnd} alt='dnd'></img>}
    </>
    )
}
export default HeroImg