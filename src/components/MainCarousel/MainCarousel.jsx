import { Carousel } from '../UI/Carousel/Carousel/Carousel';
import { SlideOne } from './SlideOne/SlideOne';
import { SlideThree } from './SlideThree/SlideThree';
import { SlideTwo } from './SlideTwo/SlideTwo';

export const MainCarousel = () => {
  return (
    <Carousel>
      <SlideOne />
      <SlideTwo />
      <SlideThree />
    </Carousel>
  )
}
