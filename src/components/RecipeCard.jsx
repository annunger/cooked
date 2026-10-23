import heartOutline from "../assets/heart-icon.svg";
import heartFilled from "../assets/filled-heart-icon.svg";

/**
 * Displays a preview card for a recipe.
 * 
 * @param {{ image: string, title: string, time: number }} props - recipe data
 */

function RecipeCard(props) {

    return (
        <article className="recipe-card">
                <img src={props.image} alt={props.title} className="recipe-card-image"/>
            <div className="content-container">
                <h3 className="recipe-card-title">{props.title}</h3>
                <button type="button" className="add-to-favourites" aria-label="Přidat do oblíbených">
                    <img src={heartOutline} className="add-to-favourites-icon add-heart-outline" alt="" />
                    <img src={heartFilled} className="add-to-favourites-icon add-heart-filled" alt="" />
                </button>
                <button type="button" aria-label={`Zobrazit recept: ${props.title}`} className="view-recipe-details" onClick={() => props.onSelectRecipe(props)}></button>
            </div>
        </article>
    )
}

export default RecipeCard