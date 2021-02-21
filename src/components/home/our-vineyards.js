import { useState } from 'react';
import Explanation from '../explanation';
import ourVineyardsImg_1 from '../../assets/our-vineyards-1.png';
import ourVineyardsImg_2 from '../../assets/our-vineyards-2.png';
import ourVineyardsImg_3 from '../../assets/our-vineyards-3.png';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';


import '../../styles/our-vineyards.scss';

const OurVineyards = () => {
    const images = [ourVineyardsImg_1, ourVineyardsImg_2, ourVineyardsImg_3];
    const [activeImg, setActiveImg] = useState(images[0]);

    const changeImg = (direction) => {
        if(direction === 'right') return setActiveImg(prev => {
            const index = images.indexOf(prev);
            if(index + 1 >= images.length) return images[0];
            return images[index + 1];
        });
        if(direction === 'left') return setActiveImg(prev => {
            const index = images.indexOf(prev);
            if(index - 1 < 0) return images[images.length - 1];
            return images[index - 1];
        });
    }

    return (
        <section id="our-vineyards">
            <div className="our-vineyards-container">
                <Explanation title={'Our Vineyards'} subtitle={'where everything is put together'}/>
                <div className="gallery">   
                <div className='gallery-controller'>
                    <img src={arrowLeft} onClick={() => changeImg('left')} alt='left-btn' className='controllers'/>
                    {images.map((image, index) => {
                        return <img key={index} src={image} alt="" className={image === activeImg ? 'active-img' : 'imgs'}/>
                    })}
                   <img src={arrowRight} onClick={() => changeImg('right')} alt='right-btn' className='controllers'/>
                </div>
                    <div className="img-position">
                        {images.map((image, index) => {
                            return <div key={index} 
                            className={`imgs-line ${image === activeImg ? 'active-img-line' : null}`} 
                            onClick={() => setActiveImg(images[index])}></div>
                        })}
                    </div>
                </div>  
            </div>
        </section>
    )
}

export default OurVineyards;