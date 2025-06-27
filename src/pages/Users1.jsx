import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg';
import s from "./Users1.module.scss";

const Users = () => {
    const { t } = useTranslation();

    return (
        <div>
            <main className={s.main__top}>
                <div className={s.main__top_title}>
                    <p className={s.main__top_title} >{t('aboutMe')}</p>
                </div>
                <div className="container">
                    <div className={s.main__top_box}>
                        <img className={s.main__top_left_img} src={photo} alt={t('altPhoto')} />

                        <div className={s.main__first_text}>

                            <h2 className={s.main__top_right_title}>{t('iAm')} {t('name')}</h2>


                            <p className={s.main__top_right_text}>
                                {t('jobTitle')}

                                {t('jobDescription')}

                                {t('keySkills')}:

                                <ul className={s.main__top_right_list}>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility1')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility2')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility3')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility4')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility5')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility6')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('responsibility7')}
                                    </li>
                                </ul>
                            </p>
                        <p className="main__top-right-text">
                            {t('specializationsLabel')}:
                                <ul className="main__top-right-list">
                                    <li className={s.main__top_right_link}>
                                        {t('specialization1')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('specialization2')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('specialization3')}
                                    </li>
                                    <li className={s.main__top_right_link}>
                                        {t('specialization4')}
                                    </li>
                                </ul>
                        </p>
                    </div>
                </div>
                </div>
            </main>
        </div>
    );
};

export default Users;



