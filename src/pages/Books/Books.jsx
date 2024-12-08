import React from 'react'
import Book from './../../components/Book/Book';
import s from './Books.module.scss'; 
import LASTWISH from '../../img/last_wish.jpg'
const Books = (props) => {
  return (
    <div className={s.container}>
     <Book
  title="Last Wish"
  text="The first volume of Andrzej Sapkowski's *The Witcher* series, which follows Geralt of Rivia, a monster hunter who faces moral and philosophical dilemmas in a brutal world full of magic and monsters."
  img={LASTWISH} /> 


      <Book
      title="TBC"
      text="TBC"
      />
      <Book/>
    </div>
  )
}

export default Books
