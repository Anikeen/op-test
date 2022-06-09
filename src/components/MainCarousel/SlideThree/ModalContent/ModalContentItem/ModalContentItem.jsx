import './styles.scss';

export const ModalContentItem = ({ title, text }) => {
  return (
    <div className="content-item">
      <h3 className="content-item__title">
        {title}
      </h3>
      <p className="content-item__text">
        {text}
      </p>
    </div>
  )
}
