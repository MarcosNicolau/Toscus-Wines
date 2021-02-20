import Explanation from '../explanation';
import ourVineyardsImg_1 from '../../assets/our-vineyards-1.png';
import ourVineyardsImg_2 from '../../assets/our-vineyards-2.png';
import ourVineyardsImg_3 from '../../assets/our-vineyards-3.png';

import '../../styles/our-vineyards.scss';

const OurVineyards = () => {
    return (
        <section id="our-vineyards">
            <div className="our-vineyards-container">
                <Explanation title={'Our Vineyards'} subtitle={'where everything is put together'}/>
                <div className="images-container">
                    <div className="images-on-top">
                        <img src={ourVineyardsImg_1} alt="our-vineyards-img"/>
                        <img src={ourVineyardsImg_2} alt="our-vineyards-img"/>
                    </div>
                    <img src={ourVineyardsImg_3} alt="our-vineyards-img" className='bigger-vineyard-img'/>
                </div>
            </div>
        </section>
    );
}

export default OurVineyards;