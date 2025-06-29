import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import background from '../assets/images/blobid1579928399432.jpg';
import logoLnguage from '../assets/images/computer-icons-language-icon-png-favpng-NQSGiSmKDpKJpGXw1p4tMdi6Z.jpg';
import { useTranslation } from "react-i18next";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Users from "../pages/Users";
import { Route, Routes} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Default to 'light'

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng); // Save language to localStorage
    setLangMenuOpen(false);
  };

  const links = [
    { title: t('Home'), url: '/' },
    { title: t('About Me'), url: '/users' },
    { title: t('My Works'), url: '/products' },
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

            {/* Theme Toggle Button */}
            <li className="header__nav-li">
              <button onClick={toggleTheme}>
                {theme === 'light' ? 'Dark' : 'Light'} Theme
              </button>
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
            <p className="nav__text">{t('Web-development')}</p>
          </div>
        </div>
      </nav>

      <TransitionGroup>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="fade"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default Navbar;
