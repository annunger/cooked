import closeIcon from "../assets/close-icon.svg";

/**
 * Displays detailed information about recipe.
 * 
 * @param {{ title: string, image: string, time: number, ingredients: string[], instructions: string[], source: string }} props - recipe details data
 * 
 */

function RecipeDetail(props) {

    return (
        <div className="modal-overlay">
            <article 
                className="recipe-detail" 
                style={{ 
                    backgroundImage: ` linear-gradient(rgb(0 0 0 / 70%), rgb(0 0 0 / 70%) ),
                                       url("${props.image}")`
                    }}>

                <div className="recipe-detail-info">
                    
                    <h2 className="recipe-detail-title">{props.title}</h2>
                    <p className="recipe-detail-time">{props.time} min</p>

                    <button type="button" aria-label="Zavřít detail receptu" className="close-recipe-detail" onClick={props.onClose}>
                            <img src={closeIcon} className="close-icon"></img>
                        </button>

                    <div className="ingredients-instruction-container">
                        
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

                    <p className="recipe-source">zdroj: {props.source}</p>
                </div>

        </article>
    </div>
    )
}

export default RecipeDetail