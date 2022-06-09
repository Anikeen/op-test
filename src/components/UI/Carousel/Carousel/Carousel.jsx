import { useContext, useEffect, useRef, useState } from 'react'
import { MemoizedCarouselScene } from './CarouselScene';
import { CarouselContext, GlobalContext } from '../../../../context';
import './styles.scss';

export const Carousel = ({ children }) => {
  const [frameWidth, setFrameWidth] = useState(0);
  const [sceneWidth, setSceneWidth] = useState(0);
  const [sceneOffset, setSceneOffset] = useState(0);
  const [sceneStartPoint, setSceneStartPoint] = useState(0);
  const [mouseClickPoint, setMouseClickPoint] = useState(0);

  const [isPressed, setIsPressed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const sliderRef = useRef();
  const sceneRef = useRef();
  const scrollAreaRef = useRef();
  const modalRef = useRef();

  const ctx = useContext(GlobalContext);

  useEffect(() => {
    const frameW = sliderRef.current.parentElement.offsetWidth;
    setFrameWidth(frameW);
    setSceneWidth(frameW * children.length);

    const eventCallback = () => {
      setIsPressed(false);
    }

    window.addEventListener('mouseup', eventCallback);

    return () => {
      window.removeEventListener('mouseup', eventCallback)
    }
  }, []);

  useEffect(() => {
    setSceneOffset(0);
    setCurrentSlide(1);
    ctx.setIsHome(true);
  }, [ctx.isHome]);

  useEffect(() => {
    sceneRef.current.style.transform = `translateX(${sceneOffset}px)`;
  }, [sceneOffset]);

  const handleDown = (e) => {
    if (e.target === scrollAreaRef.current) return;
    if (e.target === modalRef.current) return;

    const x = getEventX(e);

    setIsPressed(true)
    setSceneStartPoint(x - sceneOffset);
    setMouseClickPoint(x);
  }

  const handleUp = (e) => {
    if (e.target === scrollAreaRef.current) return;
    if (e.target === modalRef.current) return;

    const mouseEndPoint = getEventX(e);

    if (mouseEndPoint < mouseClickPoint) {
      if (currentSlide === children.length) return;

      setSceneOffset(-(frameWidth * currentSlide));
      setCurrentSlide(currentSlide + 1);
    }

    if (mouseEndPoint > mouseClickPoint) {
      if (currentSlide === 1) return;

      setSceneOffset(-(frameWidth * (currentSlide - 2)));
      setCurrentSlide(currentSlide - 1);
    }
  }

  const handleMove = (e) => {
    if (!isPressed) return;

    let x = getEventX(e);
    const offset = x - sceneStartPoint;

    setSceneOffset(offset);
    checkBoundary(offset);
  }

  const checkBoundary = (sceneOffset) => {
    if (sceneOffset > 0) {
      setSceneOffset(0);
    }

    if (sceneOffset < frameWidth - sceneWidth) {
      setSceneOffset(frameWidth - sceneWidth);
    }
  }

  const getEventX = (e) => {
    let x = e.clientX;

    if (e.type === 'touchstart' || e.type === 'touchmove') {
      x = Math.round(e.touches[0].clientX);
    }

    if (e.type === 'touchend') {
      x = Math.round(e.nativeEvent.changedTouches[0].clientX);
    }

    return x;
  }

  const handleTransition = (position) => {
    setSceneOffset(position);
    setCurrentSlide(2);
  }

  return (
    <div
      className="slider"
      id="slider"
      ref={sliderRef}
      onMouseMove={handleMove}
      onMouseDown={handleDown}
      onMouseUp={handleUp}
      onTouchStart={handleDown}
      onTouchMove={handleMove}
      onTouchEnd={handleUp}
    >
      <CarouselContext.Provider value={{
        frameWidth,
        handleTransition,
        currentSlide,
        sceneRef,
        scrollAreaRef,
        modalRef
      }}>
        <MemoizedCarouselScene
          width={sceneWidth}
        >
          {children}
        </MemoizedCarouselScene>
      </CarouselContext.Provider>
    </div>
  )
}
