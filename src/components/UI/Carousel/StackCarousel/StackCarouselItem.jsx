import React from 'react'
import './styles.scss';

export const StackCarouselItem = ({ id, active, children }) => {
  const isActive = id === active;

  return (
    <div
      className="stack-carousel__item"
      id={id}
      style={{ display: isActive ? 'block' : 'none' }}
    >
      {children}
    </div>
  )
}
