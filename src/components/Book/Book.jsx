import React from 'react'
import s from './Book.module.scss' // Импортируем SCSS-модуль
import { Link } from 'react-router-dom';
 

const Book = (props) => {
  return (
    <div className={s.container}>
      <div className={s.card}>
        <img src={props.img} className={s.card_img} alt="card_image" />
        <div className={s.card_body}>
          <h5 className={s.card_title}>{props.title}</h5>
          <p className={s.card_text}>
            {props.text} 
          </p>
          <Link to="/book" className={s.btn}>Read</Link>
        </div>
      </div>
    </div>
  )
}

export default Book
