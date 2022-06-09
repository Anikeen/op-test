import { useContext } from 'react';
import { CarouselContext } from '../../../../context';
import { ButtonSausage } from '../../../UI/Button/ButtonSausage/ButtonSausage';
import arrow from '../../../../assets/img/icons/arrow.png';
import './styles.scss';

export const NextButton = () => {
  const ctx = useContext(CarouselContext);

  const handleClick = () => {
    ctx.handleTransition(-ctx.frameWidth * 1);
  }

  const icon = <img className="what-next__icon" src={arrow} alt="arrow" />

  return (
    <span className="what-next">
      <ButtonSausage icon={icon} text="Что дальше?" clickHandler={handleClick} />
    </span>
  )
}
