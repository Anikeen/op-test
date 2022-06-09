import { useState } from 'react'
import { StackCarouselDot } from './StackCarouselDot';
import { StackCarouselItem } from './StackCarouselItem';
import './styles.scss';

export const StackCarousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide === children.length - 1) return;
    setCurrentSlide(currentSlide + 1)
  }
  const handlePrev = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1)
  }
  const handleDot = (id) => {
    setCurrentSlide(id);
  }

  return (
    <div className="stack-carousel">
      {children.map((elem, key) => <StackCarouselItem active={currentSlide} id={key} key={key}>{elem}</StackCarouselItem>)}

      <div className="stack-carousel__control flex">
        <button className="stack-carousel__prev" onClick={handlePrev}></button>

        <div className="stack-carousel__dots flex">
          {children.map((i, key) => <StackCarouselDot id={key} active={currentSlide} handler={handleDot} key={key} />)}
        </div>

        <button className="stack-carousel__next" onClick={handleNext}></button>
      </div>
    </div>
  )
}
