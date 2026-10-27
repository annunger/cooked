import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

function App() {

  const [selectedCategory, setSelectedCategory] = useState("Všechny recepty")

  function handleSelectedCategory (category) {
    setSelectedCategory(category)
  }

  return (
    <>
      <Header onSelectedCategory={handleSelectedCategory} selectedCategory={selectedCategory}/>
      <Main selectedCategory={selectedCategory} />
      <Footer />
    </>
  );
}

export default App