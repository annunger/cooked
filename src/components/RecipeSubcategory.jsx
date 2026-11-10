import RecipeCard from './RecipeCard.jsx'

/**
 * Displays a recipe subcategory.
 * 
 * @param {{ subcategory: string, recipes: Array }} props - category data
 */

function RecipeSubcategory(props) {

    return (
        <section className="recipe-subcategory">
            <h3 className="subcategory-title">{props.subcategory}</h3>

            {props.recipes
                .filter((recipe) => recipe.subcategory.includes(props.subcategory))
                .map((recipe) => (
                    <RecipeCard 
                        key={recipe.id} 
                        {...recipe} 
                        onSelectRecipe={props.onSelectRecipe} 
                    />
            ))}

        </section>
    )
}

export default RecipeSubcategory