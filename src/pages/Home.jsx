import React from 'react'


import img1 from '../assets/images/akar-icons_facebook-fill.svg'
import img2 from '../assets/images/dashicons_whatsapp.svg'
import img3 from '../assets/images/ic_baseline-email.svg'
import img4 from '../assets/images/ph_instagram-logo-fill.svg'
import img5 from '../assets/images/Vector 3.svg'
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg'


const Home = () => {
  return (
    <>

           <main className="main__top">
                       <div className="main__top-title">
                           <p className="main__top-title" >Обо мне</p>
                       </div>
                   <div className="container">
                       <div className="main__top-box">
<div className="main__top-left">
    <img className="main__top-left-img" src={photo} alt="" />
</div>
                           <div className="main__top-right">
                               <h2 className="main__top-right-title">Я Лаишев Ильдар </h2>
                               <p className="main__top-right-text">Я Фронт-енд разработчик </p>
                               <p className="main__top-right-text">Я создаю адаптивные веб-сайты, где технологии сочитаются с креативностью </p>
                           </div>
                       </div>
                   </div>
               </main>

           <nav className="footer">
       
           <div className="container">
       <p className="footer__title">Связаться со мной</p>
       <div className="footer__text">
        <div className="footer__top-btn">

       <button className="btn">
           <img src={img1} />
       </button>
       <button className="btn">
           <img src={img2} />
       </button>
       <button className="btn">
           <img src={img3} />
       </button>
        </div>
        <div className="footer__bottom">

       <button className="btn">
           <img src={img4} />
       </button>
       <button className="btn">
           <img src={img5} />
       </button>
        </div>
       </div>
           </div>
           </nav>
    </>
  )
}

export default Home