import Hero from './hero';
import ThisIsToscus from './this-is-toscus';
import Balance from './balance';

const Home = () => {
    return(
        <>
            <Hero />
            <main>
                <ThisIsToscus />
                <Balance /> 
            </main>
        </>
    );
}

export default Home;