import '../styles/explanation.scss';

const Explanation = ({ title, subtitle, description }) => {
    return(
        <div className="explanation">
            <h1>{title}</h1>
            <h5>{subtitle}</h5>
            <p>{description}</p>
        </div>
    )
}

export default Explanation;