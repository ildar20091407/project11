
import background from '../assets/images/tild3163-6265-4137-a337-643863353964__3-01-01.png';
import { useTranslation } from 'react-i18next';

const Products = () => {
  
  const { t } = useTranslation();


  return (
    <>
        <nav className="nav__bottom">
          <img src={background} className="background" alt="" />
            <div className="nav__botom-box">
              <div className="main__top-right">
                <h2 className="nav__title">{t('Hello!')}</h2>
                <h2 className="nav__title">{t('I am')} </h2>
                <p className="nav__text">{t('Web-development')}</p>
              </div>
            </div>
        </nav>
      <div className="container">
        <h1>Страница работ</h1>
        <div className="box">
       
        </div>
      </div>
    </>
  );
};

export default Products;
