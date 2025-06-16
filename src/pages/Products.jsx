import React  from 'react';
import {products} from '../store/users/usersSlice1'


const Products = () => {



  return (
    <>
      <div className="container">
        <h1>Страница работ</h1>
        <div className="box">
          {products.map((item) => (
            <div className="product__item">

            <div className="item" key={item.id}>
              <h2>Название: {item.title}</h2>
              <p>Описание: {item.description}</p>
              <div className="product__img">

<img className="product__img" src={item.img}  />
              </div>
            </div>
              <a href={item.link} target="_blank" rel="noopener noreferrer">Ссылка на сайт</a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
