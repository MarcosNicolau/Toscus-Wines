import instagramImg from '../assets/instagram.svg';
import facebookImg from '../assets/facebook.svg';
import '../styles/footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-info">
                    <h5>Contacts</h5>
                    <p>Mendoza 2312</p>
                    <p>811-9302-8854</p>
                    <p>toscuswines@toscuswines.com</p>
                </div>
                <div className="footer-title-container">
                    <h2>Toscus Wines <span>Since 1901</span></h2>
                    <div>
                        <a href="#"><img src={instagramImg} alt="toscus-instagram"/></a>
                        <a href="#"><img src={facebookImg} alt="toscus-facebook"/></a>
                    </div>
                </div>
                <div className="footer-info">
                    <h5>Resources</h5>
                    <p>Terms</p>
                    <p>News</p>
                    <p>Wines</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;