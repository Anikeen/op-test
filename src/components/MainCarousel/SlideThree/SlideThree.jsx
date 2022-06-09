import { useState } from 'react';

import { TextWidget } from './TextWidget/TextWidget';
import { ButtonSausage } from '../../UI/Button/ButtonSausage/ButtonSausage';
import { Modal } from '../../UI/Modal/Modal';
import { ModalContent } from './ModalContent/ModalContent';
import { Images } from './Images/Images';

import { textWidgetMock1, textWidgetMock2 } from '../../../mock/text';
import icon1 from '../../../assets/img/icons/icon1.png';
import icon2 from '../../../assets/img/icons/icon2.png';
import './styles.scss';

export const SlideThree = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(true);
  }

  const icon = <span className="slide-three__icon">+</span>

  return (
    <div className="slide-three slide container--small">
      <h2 className="title stack on-top">
        <span className="title--small title--top">
          ключевое сообщение
        </span>
        <span className="title--big">
          brand <b>xy</b>
        </span>
      </h2>

      <div className="grid-block">
        <div className="area-a">
          <TextWidget addClass="text-widget--cut" iconSrc={icon1} text={textWidgetMock1} />
        </div>

        <div className="area-b">
          <TextWidget addClass="" iconSrc={icon2} text={textWidgetMock2} />
        </div>

        <div className="area-c">
          <ButtonSausage icon={icon} text="Подробнее" clickHandler={handleClick} />
        </div>
      </div>

      <Images />
      {isOpened && <Modal handler={setIsOpened}><ModalContent /></Modal>}
    </div>
  )
}
