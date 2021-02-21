import Hero from './hero';
import ThisIsToscus from './this-is-toscus';
import Balance from './balance';
import OurWines from './our-wines';
import OurVineyards from './our-vineyards';
import VisitUs from './visit-us';
import OurStory from './our-story';
import Footer from '../footer';
import lazyLoading from '../../utils/observer';
import '../../styles/section-animation.scss';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => lazyLoading(), []);
    return(
        <>
            <Hero />
            <main>
                <ThisIsToscus />
                <Balance /> 
                <OurWines />
                <OurVineyards />
                <VisitUs />
                <OurStory />
            </main>
            <Footer />
        </>
    );
}

export default Home;