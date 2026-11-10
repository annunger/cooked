import './App.css'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'

function App() {

  const [selectedCategory, setSelectedCategory] = useState("Všechny recepty")

  function handleSelectedCategory (category) {
    setSelectedCategory(category)
    setSelectedSubcategory(null)
  }

  const [selectedSubcategory, setSelectedSubcategory] = useState(null)

  function handleSelectedSubcategory (subcategory) {
    setSelectedSubcategory(subcategory)
  }

  return (
    <>
      <Header 
        onSelectedCategory={handleSelectedCategory} 
        selectedCategory={selectedCategory} 
      />
      <Main 
        selectedCategory={selectedCategory} 
        onSelectedSubcategory={handleSelectedSubcategory}
        selectedSubcategory={selectedSubcategory}/>
      <Footer />
    </>
  );
}

export default App