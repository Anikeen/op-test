import './styles.scss';

export const StackCarouselDot = ({ id, active, handler }) => {
  const isActive = id === active;

  const handleClick = () => {
    handler(id);
  }

  return (
    <button
      className={'stack-carousel__dot ' + (isActive ? 'stack-carousel__dot--active' : '')}
      onClick={handleClick}
    ></button>
  )
}
