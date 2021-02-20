import Hero from './hero';
import ThisIsToscus from './this-is-toscus';
import Balance from './balance';
import OurWines from './our-wines';
import OurVineyards from './our-vineyards';

const Home = () => {
    return(
        <>
            <Hero />
            <main>
                <ThisIsToscus />
                <Balance /> 
                <OurWines />
                <OurVineyards />
            </main>
        </>
    );
}

export default Home;