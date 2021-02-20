const Nav = () => {
    return(
        <div className="hamburguer-container">
            <button className="hamburguer-btn"></button>
            <nav className="hamburguer">
                <ul>
                    <li><a href="#this-is-us">Who we are</a></li>
                    <li><a href="#balance">What define us</a></li>
                    <li><a href="#toscus-wines">Our wines</a></li>
                    <li><a href="our-vineyards">Our vineyards</a></li>
                    <li><a href="visit-us">Visit us</a></li>
                    <li><a href="our-story">Our Story</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;