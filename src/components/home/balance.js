import Explanation from '../explanation';
import balanceImg from '../../assets/balance.jfif';
import LearnMoreBtn from '../learn-more-btn';
import '../../styles/balance.scss';

const Balance = () => {
    const description = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

    return (
        <section id="balance">
            <div className='balance-container'>
                <div className="balance-img">
                    <img src={balanceImg} alt=""/>
                </div>
                <div className="explanation-container">
                    <Explanation title={'Balance'} subtitle={'is what define us'} description={description}/>
                    <LearnMoreBtn />
                </div>
            </div>
        </section>
    );
}

export default Balance;