import '../../styles/home/hero.scss';

const HeroSection = () =>{         
    return(
        <div className='hero-container'>
            <h1 className='hero-quote'>"Wine improves with age, <span>The older the better"</span></h1>
            <h5 className='brand-name'>Toscus Wines <span>Since 1901</span></h5>
        </div>
    );
}

export default HeroSection;