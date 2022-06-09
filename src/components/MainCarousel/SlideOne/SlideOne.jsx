import { Images } from './Images/Images';
import { NextButton } from './NextButton/NextButton';
import './styles.scss';

export const SlideOne = () => {
  return (
    <div className="slide-one container slide">
      <h1 className="title title--big stack">
        <span className="title title--small title--top">привет,</span>
        <span>это <b>не</b></span>
        <span>коммерческое</span>
        <span className="flex">
          <span>задание </span>
          <NextButton />
        </span>
      </h1>
      <Images />
    </div>
  )
}
