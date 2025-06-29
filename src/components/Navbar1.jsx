import React, { useState } from 'react';
import { Link } from "react-router-dom";
import background from '../assets/images/blobid1579928399432.jpg';

import logoLnguage from '../assets/images/computer-icons-language-icon-png-favpng-NQSGiSmKDpKJpGXw1p4tMdi6Z.jpg';
import { useTranslation } from "react-i18next";
import Home1 from "../pages/Home1";
import Products1 from "../pages/Products1";
import Users1 from "../pages/Users1";
import { Route, Routes} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Navbar1 = () => {
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);

   function changeLang   (lng) {
    i18n.changeLanguage(lng);
    localStorage.setItem(lng);
    setLangMenuOpen(false); // закрыть меню после выбора
  };

  const links = [
    { title: t('Home'), url: '/' },
    { title: "Обо мне", url: '/users' },
    { title: "Mои работы", url: '/products' },
  ];

  return (
    <>


      <nav className="nav">

          <div className="nav__box">

            <div className="nav__left">
              <ul className="nav__list">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link to={link.url} className="nav__link">
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
                </div>

              <ul className="header__nav-list">
                <li className="header__nav-li" style={{ position: 'relative' }}>
                  <img 
                    src={logoLnguage} 
                    className="header__nav-button" 
                    alt="Language selection"
                    onClick={() => setLangMenuOpen(!langMenuOpen)}
                    style={{ cursor: 'pointer' }}
                    />
                  {langMenuOpen && (
                    <ul className="header__nav-dropdown" style={{
                      position: 'absolute',
                      top: '100%',
                      left: 0,
                      backgroundColor: '#fff',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
                      listStyle: 'none',
                      margin: 0,
                      padding: '5px 0',
                      borderRadius: '4px',
                      zIndex: 1000,
                    }}>
                      <li><button onClick={() => changeLang('en')}>En</button></li>
                      <li><button onClick={() => changeLang('ru')}>Ru</button></li>
                      <li><button onClick={() => changeLang('uz')}>Uz</button></li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>


      </nav>
      <nav className="nav__bottom">
        <img src={background} className="background" alt="" />
        <div className="nav__botom-box">

                           <div className="main__top-right">
                                <h2 className="nav__title">{t('Hello!')}</h2>
                                <h2 className="nav__title">{t('I am')} </h2>
                                <p className="nav__text">{t('Web-development1')}</p>

                           </div>

          </div>

      </nav>     
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={100}
                    classNames="slide"
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home1 />} />
                        <Route path="/products" element={<Products1 />} />
                        <Route path="/users" element={<Users1 />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
    </>
  );
};


export default Navbar1;



