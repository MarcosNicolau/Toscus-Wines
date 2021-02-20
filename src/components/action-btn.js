import '../styles/action-btn.scss';

const ActionBtn = ({ action }) => {
    return ( 
        <div className="action-btn">
{            // eslint-disable-next-line jsx-a11y/anchor-is-valid
}            <a href="#">{ action }</a>
        </div>
    );
}

export default ActionBtn;