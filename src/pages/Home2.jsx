import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg';
import s from "./Home.module.scss";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <main className={s.main__top}>
                <div className={s.main__top_title}>
                    <p className={s.main__top_title}>{t('aboutMe')}</p>
                </div>
                <div className={s.container}>
                    <div className={s.main__top_box}>
                        <div className={s.main__top_left}>
                            <img className={s.main__top_left_img} src={photo} />
                        </div>
                        <div className={s.main__top_right}>
                            <h2 className={s.main__top_right_title}>{t('iAm2')} {t('name2')}</h2>
                            <p className={s.main__top_right_text}>{t('frontEndDeveloper2')}</p>
                            <p className={s.main__top_right_text}>
                                {t('description2')}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

const ContactForm = () => {
    const { t } = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpatmgp', 'template_lc1e2ax', form.current, 'JWaSpnmlhnunZpzHr')
            .then((result) => {
                console.log(result.text);
                alert(t('messageSent'));
            }, (error) => {
                console.log(error.text);
                alert(t('errorMessage'));
            });
    };

    return (

        <nav className="footer">

            <div className="container">
                <p className="footer__title">{t('contactMe')}</p>
                <div className="footer__text">


                    <form ref={form} onSubmit={sendEmail}>
                        <label className="footer__email-text">{t('nameLabel')}</label>
                        <input type="text" name="user_name" />
                        <label className="footer__email-text">{t('emailLabel')}</label>
                        <input type="email" name="user_email" />
                        <label className="footer__email-text">{t('messageLabel')}</label>
                        <textarea name="message" />
                        <input type="submit" value={t('send')} />
                    </form>
                </div>
            </div>

        </nav>
    );
};


const CombinedComponent = () => {
    return (
        <>
            <Home />
            <ContactForm />
        </>
    );
};


export default CombinedComponent;
