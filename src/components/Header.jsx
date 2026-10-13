function Header() {

    return (
        <header className="site-header">
            <h1 className="appHeading">Cooked</h1>
            <div className="search-container">
            <input type="search" id="search-input"/>
            <label htmlFor="search-input">Vyhledávání receptů</label>
            </div>
            <button className="favourite"></button>

            <div className="categories-container">
            <nav aria-label="categories">
                <ul>
                <li className="list-item"><a href="#all">Všechny</a></li>
                <li className="list-item"><a href="#breakfast">Snídaně</a></li>
                <li className="list-item"><a href="#soups">Polévky</a></li>
                <li className="list-item"><a href="#lunch">Hlavní jídlo</a></li>
                <li className="list-item"><a href="#desserts">Dezerty</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header