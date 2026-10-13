import RecipeCard from './RecipeCard.jsx'

/**
 * Displays a recipe category.
 * 
 * @param {{ name: string, recipes: Array }} props - category data
 */

function RecipeCategory(props) {

    return (
        <section className="recipe-category">
            <h2 className="category-title">{props.name}</h2>

        <div className="recipes-container">
            {props.recipes.map((recipe) => (
                <RecipeCard 
                    key={recipe.id}
                    {...recipe}
                />
            ))}

        </div>

        </section>
    )
}

export default RecipeCategory