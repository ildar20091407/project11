import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg';
import s from "./Users.module.scss";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <main className={s.main__top}>
                <div className={s.main__top_title}>
                    <p className={s.main__top_title}>{t('aboutMeU3')}</p>
                </div>
                <div className={s.container}>
                    <div className={s.main__top_box}>
                        <div className={s.main__top_left}>
                            <img className={s.main__top_left_img} src={photo} alt={t('altPhotoU3')} />
                        </div>
                        <div className={s.main__top_right}>
                            <h2 className={s.main__top_right_title}>{t('iAmU3')} {t('nameU3')}</h2>
                            <p className={s.main__top_right_text}>{t('frontEndDeveloperU3')}</p>
                            <p className={s.main__top_right_text}>
                                {t('descriptionU3')}
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;

