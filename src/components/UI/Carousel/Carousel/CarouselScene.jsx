import { memo, useContext } from 'react'
import { CarouselContext } from '../../../../context';
import { CarouselItem } from './CarouselItem';

const CarouselScene = ({ width, children }) => {
  const ctx = useContext(CarouselContext);

  return (
    <div
      className="slider__scene"
      ref={ctx.sceneRef}
      style={{
        width: `${width}px`,
      }}

    >
      {
        children.map((child, key) => <CarouselItem width={ctx.frameWidth} child={child} key={key} />)
      }
    </div>
  )
}

export const MemoizedCarouselScene = memo(CarouselScene);
