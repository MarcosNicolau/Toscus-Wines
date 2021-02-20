import Explanation from '../explanation';
import abstractImg from '../../assets/abstract-1.png';
import '../../styles/this-is-toscus.scss';

const ThisIsToscus = () => {

    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    
    return (
        <section id="this-is-toscus">
            <div className="this-is-toscus-container">
                <Explanation title={'This is Toscus'} subtitle={'we made a promise'} description={description}/>
                <img src={abstractImg} alt=""/>
            </div>
        </section>
    )
}

export default ThisIsToscus;