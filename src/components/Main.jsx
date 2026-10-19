import RecipeCategory from './RecipeCategory.jsx'
import { recipes } from '../data/recipes.js'
import RecipeDetail from './RecipeDetail.jsx'
import { useState } from 'react'

function Main() {

    const [selectedRecipe, setSelectedRecipe] = useState(null);

    function handleSelectRecipe(recipe) {
        setSelectedRecipe(recipe)
    }

    function handleCloseRecipe() {
        setSelectedRecipe(null)
    }

    return (
        <main className="main-container">
           <div id="recipe-carousel" className="carousel">
                <RecipeCategory name="Všechny recepty" recipes={[]} onSelectRecipe={handleSelectRecipe} />
                <RecipeCategory name="Snídaně" recipes={[]} onSelectRecipe={handleSelectRecipe} />
                <RecipeCategory name="Polévky" recipes={recipes} onSelectRecipe={handleSelectRecipe} />
                <RecipeCategory name="Hlavní jídlo" recipes={[]} onSelectRecipe={handleSelectRecipe} />
                <RecipeCategory name="Dezerty" recipes={[]} onSelectRecipe={handleSelectRecipe} />
            </div> 
            <div id="popular-recipes-carousel" className="carousel">
                {/* komponenta oblíbené kategorie */}
            </div>
            {selectedRecipe && <RecipeDetail {...selectedRecipe} onClose={handleCloseRecipe} />}
        </main>
    )
}

export default Main