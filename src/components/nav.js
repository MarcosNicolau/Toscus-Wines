import '../styles/nav.scss';
import hamburguerImg from'../assets/hamburguer.svg';
import close from '../assets/close.svg'
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
    const [toogleNav, setToogleNav] = useState(false);
    const nav = useRef();
    
    useEffect(() => {
        if(!toogleNav) return nav.current.classList.remove('nav-active'); 
        return nav.current.classList.add('nav-active');
    }, [toogleNav]);

    return(
        <div className="hamburguer-container">
            <button className="hamburguer-btn" onClick={() => setToogleNav(prev => !prev)}><img src={toogleNav ? close : hamburguerImg} alt="hamburguer-btn"/></button>
            <nav ref={nav} className="hamburguer">
                <ul>
                    <li><a href="#this-is-us">Who we are</a></li>
                    <li><a href="#balance">What define us</a></li>
                    <li><a href="#toscus-wines">Our wines</a></li>
                    <li><a href="#our-vineyards">Our vineyards</a></li>
                    <li><a href="#visit-us">Visit us</a></li>
                    <li><a href="#our-story">Our Story</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;