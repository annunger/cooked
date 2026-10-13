import RecipeCategory from './RecipeCategory'

function Main() {

    return (
        <main className="main-container">
           <div id="recipe-carousel" className="carousel">
                <RecipeCategory name="všechny recepty" recipes={[]} />
                <RecipeCategory name="snídaně" recipes={[]} />
                <RecipeCategory name="polévky" recipes={[]} />
                <RecipeCategory name="hlavní jídlo" recipes={[]} />
                <RecipeCategory name="dezerty" recipes={[]} />
           </div>
           <div id="popular-recipes-carousel" className="carousel">
                {/* komponenta oblíbené kategorie */}
           </div>
        </main>
    )
}

export default Main