import { useContext } from 'react';
import { CarouselContext } from '../../../context';
import './styles.scss';

export const Modal = ({ handler, children }) => {
  const ctx = useContext(CarouselContext);

  const handleClick = () => {
    handler(false);
  }

  return (
    <div className="modal-window" ref={ctx.modalRef}>
      <div className="modal-window__layer"></div>
      <div className="modal-window__content">
        {children}

        <button
          className="modal-window__closer"
          type="button"
          onClick={handleClick}
        >
        </button>
      </div>
    </div>
  )
}
