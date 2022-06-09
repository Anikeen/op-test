import { useContext, useEffect, useRef, useState } from 'react';
import { CarouselContext } from '../../../../../context';
import './styles.scss';

export const CustomScroll = ({ handleTextScroll }) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const [isPressed, setIsPressed] = useState(false);
  const [sliderOffset, setSliderOffset] = useState(0);
  const [mouseStartPoint, setMouseStartPoint] = useState(0);

  const scrollRef = useRef();

  const ctx = useContext(CarouselContext);

  useEffect(() => {
    const scrollH = ctx.scrollAreaRef.current.clientHeight;
    setScrollHeight(scrollH);

    const eventCallback = () => {
      setIsPressed(false);
    }

    window.addEventListener('mouseup', eventCallback);

    return () => {
      window.removeEventListener('mouseup', eventCallback)
    }
  }, []);

  useEffect(() => {
    const scrollPercent = Math.round((sliderOffset) / (scrollHeight / 100));

    handleTextScroll(scrollPercent);

    scrollRef.current.style.transform = `translateY(${sliderOffset}px)`;
  }, [sliderOffset]);

  const handleClick = (e) => {
    const y = getEventY(e);

    setIsPressed(true);
    setMouseStartPoint(y - sliderOffset);
  }

  const handleMove = (e) => {
    if (!isPressed) return;
    const y = getEventY(e);
    const offset = y - mouseStartPoint;

    setSliderOffset(offset);
    checkBoundary(offset);
  }

  const checkBoundary = (sliderOffset) => {
    if (sliderOffset < 0) {
      setSliderOffset(0);
    }

    if (sliderOffset > ctx.scrollAreaRef.current.clientHeight - 100) {
      setSliderOffset(ctx.scrollAreaRef.current.clientHeight - 100);
    }
  }

  const getEventY = (e) => {
    let y = e.nativeEvent.offsetY;

    if (e.type === 'touchstart' || e.type === 'touchmove') {
      y = Math.round(e.touches[0].clientY);
    }

    return y;
  }

  return (
    <div className="custom-scroll">
      <div
        className="custom-scroll__area"
        ref={ctx.scrollAreaRef}
        onMouseDown={handleClick}
        onMouseMove={handleMove}
        onTouchStart={handleClick}
        onTouchMove={handleMove}
      >
      </div>

      <div className="custom-scroll__bar"></div>

      <div
        className="custom-scroll__slider"
        ref={scrollRef}
      // onMouseDown={handlePress}
      >
      </div>
    </div>
  )
}
