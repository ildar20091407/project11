import React from 'react';
import photo from '../assets/images/photo_2025-02-10_09-43-29.jpg'

const Users = () => {


  return (
    <div className="border p-2 w-64">
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
                               <p className="main__top-right-text">Я создаю адаптивные веб-сайты, где технологии сщчитаются с креативностью </p>
                           </div>
                       </div>
                   </div>
               </main>
    </div>
  );
};

export default Users;


