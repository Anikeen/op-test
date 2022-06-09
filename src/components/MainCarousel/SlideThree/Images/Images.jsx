import './styles.scss';
import bottle from '../../../../assets/img/slide3/bottle.png';
import buble1 from '../../../../assets/img/slide3/1.png';
import buble2 from '../../../../assets/img/slide3/2.png';
import buble3 from '../../../../assets/img/slide3/3.png';
import buble4 from '../../../../assets/img/slide3/4.png';
import buble5 from '../../../../assets/img/slide3/5.png';
import buble6 from '../../../../assets/img/slide3/6.png';
import buble7 from '../../../../assets/img/slide3/7.png';
import buble8 from '../../../../assets/img/slide3/8.png';

export const Images = () => {
  return (
    <div className='slide-images'>
      <img className="slide-images__pic bottle" src={bottle} alt="bottle" />
      <img className="slide-images__pic buble_1" src={buble1} alt="buble" />
      <img className="slide-images__pic buble_2" src={buble2} alt="buble" />
      <img className="slide-images__pic buble_3" src={buble3} alt="buble" />
      <img className="slide-images__pic buble_4" src={buble4} alt="buble" />
      <img className="slide-images__pic buble_5" src={buble5} alt="buble" />
      <img className="slide-images__pic buble_6" src={buble6} alt="buble" />
      <img className="slide-images__pic buble_7" src={buble7} alt="buble" />
      <img className="slide-images__pic buble_8" src={buble8} alt="buble" />
    </div>
  )
}
