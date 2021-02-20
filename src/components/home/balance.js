import Explanation from '../explanation';
import balanceImg from '../../assets/balance.jfif';
import LearnMoreBtn from '../learn-more-btn';
import '../../styles/one-img-&-explanation.scss';

const Balance = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.';

    return (
        <section id="balance">
            <div className='container'>
                <div className="img-container">
                    <img src={balanceImg} alt="balance-img" style={{height: '20em'}}/>
                </div>
                <div className="explanation-container">
                    <Explanation title={'Balance'} subtitle={'is what we are known for'} description={description}/>
                    <LearnMoreBtn />
                </div>
            </div>
        </section>
    );
}

export default Balance;