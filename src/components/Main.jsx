import { useState } from 'react';
import { recipes } from '../data/recipes.js';
import RecipeCategory from './RecipeCategory.jsx';
import RecipeDetail from './RecipeDetail.jsx';

function Main(props) {

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
                {props.selectedCategory === "Všechny recepty" && (
                    <RecipeCategory 
                        category="Všechny recepty" 
                        recipes={recipes} 
                        onSelectRecipe={handleSelectRecipe} />
                )}
                {props.selectedCategory === "Snídaně" && (
                    <RecipeCategory    
                        category="Snídaně" 
                        recipes={recipes.filter((recipe) => recipe.category === "Snídaně")} 
                        onSelectRecipe={handleSelectRecipe} />
                )}
                {props.selectedCategory === "Svačiny" && (
                    <RecipeCategory 
                        category="Svačiny" 
                        recipes={recipes.filter((recipe) => recipe.category === "Svačiny")} 
                        onSelectRecipe={handleSelectRecipe} />
                )}
                {props.selectedCategory === "Polévky" && (
                    <RecipeCategory 
                        category="Polévky" 
                        recipes={recipes.filter((recipe) => recipe.category === "Polévky")}
                        onSelectRecipe={handleSelectRecipe} />  
                )}
                {props.selectedCategory === "Hlavní jídla" && (
                    <RecipeCategory 
                        category="Hlavní jídla" 
                        recipes={recipes.filter((recipe) => recipe.category === "Hlavní jídla")} 
                        onSelectRecipe={handleSelectRecipe}
                        selectedSubcategory={props.selectedSubcategory}
                        onSelectedSubcategory={props.onSelectedSubcategory} />
                )}
                {props.selectedCategory === "Dezerty" && (
                    <RecipeCategory 
                        category="Dezerty" 
                        recipes={recipes.filter((recipe) => recipe.category === "Dezerty")}
                        onSelectRecipe={handleSelectRecipe} />
                )}
            </div> 

            <div id="popular-recipes-carousel" className="carousel">
                {/* komponenta oblíbené kategorie */}
            </div>

            {selectedRecipe && <RecipeDetail {...selectedRecipe} onClose={handleCloseRecipe} />}
        </main>
    )
}

export default Main