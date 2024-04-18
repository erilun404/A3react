import { useState, useEffect } from 'react'
import Header from './components/Header/Index'
import Menja from './components/Menja/index'
import Merva from './components/Merva/index'
import Footer from './components/Footer/Index'
import Home from './components/Home'
import Navigation from './components/Navigation/Index'

function App() {
    const [currentPage, setCurrentPage] = useState(null)
    const [currentGame, setCurrentGame] = useState(null)
    
    useEffect(() => {
      if (currentPage === "merva") {
        setCurrentGame("DnD")
      } else if (currentPage === "menja") {
        setCurrentGame("Mutant")
      } else{
        setCurrentGame("Welcome to my website")
      }
    },[currentPage])
    
  return (
    <>
      <Header page={currentGame}/>
      <Navigation navigationUpdateFunction={setCurrentPage} />
      
      {!currentPage && <Home />}
      {currentPage === "menja" && <Menja />  }
      {currentPage === "merva" && <Merva />}
      
      <Footer/>
      
    </>
  )
}

export default App
