import './styles.scss';
import logo from '../../../assets/img/icons/logo.png';

export const Logo = () => {
  return (
    <div className="logo">
      <img className="logo__img" src={logo} alt="onepoint" />
    </div>
  )
}
