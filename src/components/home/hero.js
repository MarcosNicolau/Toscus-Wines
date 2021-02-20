import { useEffect, useRef, useState } from 'react';
import lazyLoading from '../../utils/observer';
import '../../styles/hero.scss';

const HeroSection = () =>{  
    const [brand, setBrand] = useState(false);
    const brandRef = useRef();
    const sectionRef = useRef();
    
    useEffect(() => {
        if(!brand) return brandRef.current.classList.remove('brand-name-active');
        brandRef.current.classList.add('brand-name-active');
    }, [brand]);

    useEffect(() => {
        lazyLoading(sectionRef.current, setBrand);
    }, []);

    return(
        <section className='hero-section' >
            <div className='hero-container' ref={sectionRef}>
                <h1 className='hero-quote'>"Wine improves with age, <span>The older the better"</span></h1>
                <h5 className='brand-name' ref={brandRef}>Toscus Wines <span>Since 1901</span></h5>
            </div>
        </section>
    );
}

export default HeroSection;