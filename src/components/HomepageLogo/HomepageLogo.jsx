import { useContext } from 'react';
import homeImg from '../../assets/img/icons/home-icon.png';
import { GlobalContext } from '../../context';
import './styles.scss';

export const HomepageLogo = () => {
  const ctx = useContext(GlobalContext);
  const handleClick = () => {
    ctx.setIsHome(false);
  }

  return (
    <div className='homepage-logo'>
      <div className="homepage-logo__icon">
        <button className="homepage-logo__btn" onClick={handleClick}>
          <img className="homepage-logo__img" src={homeImg} alt="" />
        </button>
      </div>

      <span className="homepage-logo__text">
        Project
      </span>
    </div>
  )
}
