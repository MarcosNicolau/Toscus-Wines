import Explanation from '../explanation';
import LearnMoreBtn from '../learn-more-btn';
import ourWinesImg_1 from '../../assets/our-wines-1.jfif';
import ourWinesImg_2 from '../../assets/our-wines-2.jfif';
import abstractImg from '../../assets/abstract-2.png';
import '../../styles/home/our-wines.scss';

const OurWines = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    return (
        <section id="our-wines">
            <div className='our-wines-container'>
                <img src={abstractImg} alt="abstract-img" className='abstract-img'/>
                <div className="explanation-container">
                    <Explanation title={'Toscus wines'} subtitle={'theological & sorbonnical'} description={description} />
                    <LearnMoreBtn />    
                </div>

                <div className="images">
                    <img src={ourWinesImg_1} alt="toscus-wines" className='up-image'/>
                    <img src={ourWinesImg_2} alt="toscus-wines"/>
                </div>
            </div>
        </section>
    );
}

export default OurWines;