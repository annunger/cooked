import searchIcon from "../assets/search-icon.svg";
import heartIcon from "../assets/heart-icon.svg";

function Header() {

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
                <a href="" className="favourites" aria-label="Oblíbené recepty"><img src={heartIcon} className="favourites-icon" alt=""></img></a>
            </div>

            <nav className="categories-container" aria-label="Kategorie receptů">
                <ul className="list-container">
                    <li><a href="#all" className="list-item">Všechny recepty</a></li>
                    <li><a href="#breakfast" className="list-item">Snídaně</a></li>
                    <li><a href="#snacks" className="list-item">Svačiny</a></li>
                    <li><a href="#soups" className="list-item">Polévky</a></li>
                    <li><a href="#lunches" className="list-item">Hlavní jídla</a></li>
                    <li><a href="#desserts" className="list-item">Dezerty</a></li>
                    <li><a href="#bread" className="list-item">Pečivo</a></li>
                    <li><a href="#drinks" className="list-item">Nápoje</a></li>
                </ul>
            </nav>
            
        </header>
    )
}

export default Header