import Explanation from '../explanation';
import LearnMoreBtn from '../learn-more-btn';
import ourStoryImg from '../../assets/our-story.jfif';
import '../../styles/one-img-&-explanation.scss';
import '../../styles/our-story.scss';

const OurStory = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text. '

    return (
        <section id="our-story">
            <div className="our-story-container">
                <div className="explanation-container">
                    <Explanation title={'Our story'} subtitle={'Brilliant, & full of passion'} description={description}/>
                    <LearnMoreBtn />
                </div>
                <div className="img-container">
                    <img src={ourStoryImg} alt="our-story-img" style={{height: '50em'}}/>
                </div>
            </div>
        </section>
    );
}

export default OurStory;