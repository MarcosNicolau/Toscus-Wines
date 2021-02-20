import Explanation from '../explanation';
import visitUsImg from '../../assets/visit-us-2.jfif';
import ActionBtn from '../action-btn';
import abstractImg from '../../assets/abstract-1.png';
import '../../styles/one-img-&-explanation.scss';

const VisitUs = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text. ';

    return (
        <section id="visit-us">
            <div className='container'>
                <div className="img-container">
                    <img src={visitUsImg} alt="visit-us-img" style={{height: '25em'}}/>
                </div>
                <div className="explanation-container">
                    <Explanation title={'Visit Us'} subtitle={'an unforgettable experience'} description={description}/>
                    <ActionBtn action={'Reserve'}/>
                </div>
                <img src={abstractImg} alt="abstract-img" style={{
                    position: 'absolute',
                    top: '15em',
                    right: '0em',
                    zIndex: '-1'
                }}/>
            </div>
        </section>
    );
}

export default VisitUs;