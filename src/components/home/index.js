import Hero from './hero';
import ThisIsToscus from './this-is-toscus';
import Balance from './balance';
import OurWines from './our-wines';

const Home = () => {
    return(
        <>
            <Hero />
            <main>
                <ThisIsToscus />
                <Balance /> 
                <OurWines />
            </main>
        </>
    );
}

export default Home;