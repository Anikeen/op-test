
export const CarouselItem = ({ width, child }) => {
  return (
    <div style={{ width: `${width}px`, height: '100%' }}>
      {child}
    </div>
  )
}
