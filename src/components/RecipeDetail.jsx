/**
 * Displays detailed information about recipe.
 * 
 * @param {{ title: string, image: string, time: number, ingredients: string[], instructions: string[] }} props - recipe details data
 * 
 */

function RecipeDetail(props) {

    return (
        <article className="recipe-detail">
            <div className="image-container">
                <img src={props.image} alt={props.title} className="recipe-detail-image"/>
            </div>

            <div className="recipe-detail-info">
                <h2 className="recipe-detail-title">{props.title}</h2>
                <p className="recipe-detail-time">{props.time} min</p>
                
                <div className="ingredients-container">
                    <h3 className="content-heading">Ingredience:</h3>
                    <ul className="ingredients-list">
                        {props.ingredients.map((ingredient) => (
                            <li key={ingredient}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div className="instructions-container">
                    <h3 className="content-heading">Postup:</h3>
                    <ol className="instructions">
                        {props.instructions.map((instruction) => (
                            <li key={instruction}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <button type="button" aria-label="Zavřít detail receptu" className="close-recipe-detail" onClick={props.onClose}>x</button>

        </article>
    )
}

export default RecipeDetail