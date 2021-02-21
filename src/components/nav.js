import '../styles/nav.scss';
import hamburguerImg from'../assets/hamburguer.svg';
import close from '../assets/close.svg'
import { useState } from 'react';

const Nav = () => {
    const [toogleNav, setToogleNav] = useState(false);    
 
    return(
        <nav>
            <img src={toogleNav ? close : hamburguerImg} alt="hamburguer-btn"
                className={"hamburguer-btn"} 
                onClick={() => setToogleNav(prev => !prev)}
            />
            <div className={`hamburguer ${toogleNav ? 'nav-active' : null}`}>
                <ul onClick={() => setToogleNav(prev => !prev)}>
                    <li><a href="#this-is-toscus">Who we are</a></li>
                    <li><a href="#balance">What define us</a></li>
                    <li><a href="#our-wines">Our wines</a></li>
                    <li><a href="#our-vineyards">Our vineyards</a></li>
                    <li><a href="#visit-us">Visit us</a></li>
                    <li><a href="#our-story">Our Story</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;