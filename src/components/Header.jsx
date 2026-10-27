import searchIcon from "../assets/search-icon.svg";
import heartOutline from "../assets/heart-icon.svg";
import heartFilled from "../assets/filled-heart-icon.svg";

function Header(props) {

    return (
        <header className="site-header">
            <div className="header-top-container">
                <h1 className="appHeading">Cooked</h1>
                <form className="search-container" role="search">
                    <label htmlFor="search-input" className="visually-hidden">Vyhledávání receptů</label>
                    <div className="input-container">
                        <img src={searchIcon} className="search-icon" alt=""></img>
                        <input type="search" id="search-input" placeholder="vyhledat recept"/>
                    </div>
                </form>
                <a href="" className="favourites" aria-label="Oblíbené recepty">
                    <img src={heartOutline} className="favourites-icon heart-outline" alt="" />
                    <img src={heartFilled} className="favourites-icon heart-filled" alt="" />
                </a>
            </div>

            <nav className="categories-container" aria-label="Kategorie receptů">
                <ul className="list-container">
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Všechny recepty" 
                                ? "list-item-active"
                                : "list-item" 
                            }
                            onClick={() => props.onSelectedCategory("Všechny recepty")}
                        >
                            Všechny recepty
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Snídaně"
                                ? "list-item-active"
                                : "list-item"
                            }    
                            onClick={() => props.onSelectedCategory("Snídaně")}
                        >
                            Snídaně
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Svačiny"
                                ? "list-item-active"
                                : "list-item"
                            }
                            onClick={() => props.onSelectedCategory("Svačiny")}
                        >
                            Svačiny
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Polévky"
                                ? "list-item-active"
                                : "list-item"
                            }
                            onClick={() => props.onSelectedCategory("Polévky")}
                        >
                            Polévky
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Hlavní jídla"
                                ? "list-item-active"
                                :"list-item"
                            }
                            onClick={() => props.onSelectedCategory("Hlavní jídla")}
                        >
                            Hlavní jídla
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Dezerty"
                                ? "list-item-active"
                                : "list-item" 
                            }
                            onClick={() => props.onSelectedCategory("Dezerty")}
                        >
                            Dezerty
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Pečivo"
                                ? "list-item-active"
                                : "list-item" 
                            }
                            onClick={() => props.onSelectedCategory("Pečivo")}
                        >
                            Pečivo
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className={
                                props.selectedCategory === "Nápoje"
                                ? "list-item-active"
                                : "list-item"
                            }
                            onClick={() => props.onSelectedCategory("Nápoje")}
                        >
                            Nápoje
                        </button>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header