import arrowImg from '../assets/arrow.svg';
import '../styles/learn-more-btn.scss';

const LearnMoreBtn = () => {
    return (
        <div className="learn-more-btn">
{            // eslint-disable-next-line jsx-a11y/anchor-is-valid
}            <a href="#">Learn More
                <img src={arrowImg} alt="learn-more-arrow"/>
            </a>
        </div>
    );
}

export default LearnMoreBtn;

