import './styles.scss';
import spore_1 from '../../../../assets/img/slide1/spore_1.png';
import spore_2 from '../../../../assets/img/slide1/spore_2.png';
import spore_3 from '../../../../assets/img/slide1/spore_3.png';
import spore_4 from '../../../../assets/img/slide1/spore_4.png';
import spore_5 from '../../../../assets/img/slide1/spore_5.png';
import spore_6 from '../../../../assets/img/slide1/spore_6.png';
import sperm_1 from '../../../../assets/img/slide1/sperm_1.png';
import sperm_2 from '../../../../assets/img/slide1/sperm_2.png';
import bacillus from '../../../../assets/img/slide1/bacillus.png';


export const Images = () => {
  return (
    <div>
      <img className="slide-images__pic spore_1" src={spore_1} alt="spore" />
      <img className="slide-images__pic spore_2" src={spore_2} alt="spore" />
      <img className="slide-images__pic spore_3" src={spore_3} alt="spore" />
      <img className="slide-images__pic spore_4" src={spore_4} alt="spore" />
      <img className="slide-images__pic spore_5" src={spore_5} alt="spore" />
      <img className="slide-images__pic spore_6" src={spore_6} alt="spore" />
      <img className="slide-images__pic sperm_1" src={sperm_1} alt="sperm" />
      <img className="slide-images__pic sperm_2" src={sperm_2} alt="sperm" />
      <img className="slide-images__pic bacillus" src={bacillus} alt="bacillus" />
    </div>
  )
}
