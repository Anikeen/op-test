import './styles.scss';

export const ButtonSausage = ({ icon, text, clickHandler }) => {
  return (
    <button
      className="button-sausage"
      type="button"
      onClick={clickHandler}
    >
      <div className="button-sausage__icon">
        {icon}
      </div>
      <span className="button-sausage__text">
        {text}
      </span>
    </button>
  )
}
