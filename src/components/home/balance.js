import Explanation from '../explanation';
import balanceImg from '../../assets/balance.jfif';
import LearnMoreBtn from '../learn-more-btn';
import '../../styles/balance.scss';

const Balance = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.';

    return (
        <section id="balance">
            <div className='balance-container'>
                <div className="balance-img">
                    <img src={balanceImg} alt=""/>
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