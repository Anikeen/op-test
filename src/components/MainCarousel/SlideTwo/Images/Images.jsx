import './styles.scss';
import sperm_1 from '../../../../assets/img/slide2/1.png';
import sperm_2 from '../../../../assets/img/slide2/2.png';
import sperm_3 from '../../../../assets/img/slide2/3.png';

export const Images = ({ isShown }) => {
  const show = isShown ? 'show' : '';

  return (
    <div>
      <img className={`slide-images__pic sperm1 ${show}`} src={sperm_1} alt="sperm" />
      <img className={`slide-images__pic sperm2 ${show}`} src={sperm_2} alt="sperm" />
      <img className={`slide-images__pic sperm_3 ${show}`} src={sperm_3} alt="sperm" />
      <img className={`slide-images__pic sperm_4 ${show}`} src={sperm_2} alt="sperm" />
      <img className={`slide-images__pic sperm_5 ${show}`} src={sperm_3} alt="sperm" />
    </div>
  )
}
