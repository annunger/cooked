/**
 * Displays a preview card for a recipe.
 * 
 * @param {{ image: string, title: string, time: number }} props - recipe data
 */

function RecipeCard(props) {

    return (
        <article className="recipe-card">
            <div className="image-container">
                <img src={props.image} alt={props.title} className="recipe-card-image"/>
            </div>

            <div className="recipe-card-info">
                <h3 className="recipe-card-title">{props.title}</h3>
                <p className="recipe-card-time">{props.time} min</p>
            </div>

            <button type="button" aria-label="Přidat do oblíbených" className="favourite-recipe-button"></button>
            <button type="button" aria-label="Zobrazit recept" className="">Zobrazit</button>
        </article>
    )
}

export default RecipeCard