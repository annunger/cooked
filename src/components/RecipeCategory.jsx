import RecipeCard from './RecipeCard.jsx'
import RecipeSubcategory from './RecipeSubcategory.jsx'

/**
 * Displays a recipe category.
 * 
 * @param {{ category: string, recipes: Array }} props - category data
 */

function RecipeCategory(props) {

    return (
        <section className="recipe-category">

            <h2 className="category-title">{props.category}</h2>
            
            {props.category === "Hlavní jídla" && (
                <div className="subcategory-list-container">
                    <ul className="subcategory-list">
                        <li>
                            <button
                                type="button"
                                className={
                                    props.selectedSubcategory === "Drůbeží maso"
                                    ? "subcategory-list-item-active"
                                    : "subcategory-list-item"
                                }
                                onClick={() => props.onSelectedSubcategory("Drůbeží maso")}
                            >
                                Drůbeží maso
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                className={
                                    props.selectedSubcategory === "Hovězí maso"
                                    ? "subcategory-list-item-active"
                                    : "subcategory-list-item"
                                }
                                onClick={() => props.onSelectedSubcategory("Hovězí maso")}
                            >
                                Hovězí maso
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                className={
                                    props.selectedSubcategory === "Vepřové maso"
                                    ? "subcategory-list-item-active"
                                    : "subcategory-list-item"
                                }
                                onClick={() => props.onSelectedSubcategory("Vepřové maso")}
                            >
                                Vepřové maso
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                className={
                                    props.selectedSubcategory === "Ryby"
                                    ? "subcategory-list-item-active"
                                    : "subcategory-list-item"
                                }
                                onClick={() => props.onSelectedSubcategory("Ryby")}
                            >
                                Ryby
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                className={
                                    props.selectedSubcategory === "Vegetariánská jídla"
                                    ? "subcategory-list-item-active"
                                    : "subcategory-list-item"
                                }
                                onClick={() => props.onSelectedSubcategory("Vegetariánská jídla")}
                            >
                                Vegetariánská jídla
                            </button>
                        </li>
                    </ul>
                </div>
            )}      

            {props.category === "Hlavní jídla" && props.selectedSubcategory !== null ? (
                <RecipeSubcategory
                    subcategory={props.selectedSubcategory}
                    recipes={props.recipes}
                    onSelectRecipe={props.onSelectRecipe}
                />
            ) : (
                props.recipes.map((recipe) => (
                    <RecipeCard 
                        key={recipe.id} 
                        {...recipe} 
                        onSelectRecipe={props.onSelectRecipe} 
                    />
                ))
            )}
        </section>
    )
}

export default RecipeCategory