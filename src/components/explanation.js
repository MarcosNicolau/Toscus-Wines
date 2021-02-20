const Explanation = ({ title, subtitle, description }) => {
    return(
        <div className="explanation">
            <h1 className="explanation-tittle">{title}</h1>
            <h5 className="explanation-subtitle">{subtitle}</h5>
            <p className="explanation-description">{description}</p>
        </div>
    )
}

export default Explanation;