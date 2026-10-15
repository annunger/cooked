import RecipeCategory from './RecipeCategory.jsx'
import { recipes } from '../data/recipes.js'
import RecipeDetail from './RecipeDetail.jsx'

function Main() {

    return (
        <main className="main-container">
           <div id="recipe-carousel" className="carousel">
                <RecipeCategory name="Všechny recepty" recipes={[]} />
                <RecipeCategory name="Snídaně" recipes={[]} />
                <RecipeCategory name="Polévky" recipes={recipes} />
                <RecipeCategory name="Hlavní jídlo" recipes={[]} />
                <RecipeCategory name="Dezerty" recipes={[]} />
            </div> 
                <RecipeDetail {...recipes[0]} />
           <div id="popular-recipes-carousel" className="carousel">
                {/* komponenta oblíbené kategorie */}
           </div>
        </main>
    )
}

export default Main