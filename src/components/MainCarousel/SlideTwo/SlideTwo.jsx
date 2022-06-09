import { useContext, useEffect, useState } from 'react';
import { CarouselContext } from '../../../context';
import { Images } from './Images/Images';
import { ScrolledBlock } from './ScrolledBlock/ScrolledBlock';
import './styles.scss';

export const SlideTwo = () => {
  const [isShown, setIsShown] = useState(false);
  const ctx = useContext(CarouselContext);

  useEffect(() => {
    if (ctx.currentSlide === 2) setIsShown(true);
  }, [ctx.currentSlide]);

  return (
    <div className="slide-two container slide">
      <h2 className="title title--small">
        <span className="title--top stack">
          <span>текст</span>
          <span>сообщения</span>
        </span>
      </h2>
      <ScrolledBlock />
      <Images isShown={isShown} />
    </div>
  )
}
