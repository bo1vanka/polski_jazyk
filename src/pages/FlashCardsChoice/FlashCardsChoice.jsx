import React from 'react'
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card'
import s from './FlashCardsChoice.module.scss'

const FlashCardsChoice = () => {
  return (
    <div className={s.container}>

    <p className={s.name}>Flash - cards</p>
    <p>Choose theme</p>
    <div className={s.buttons}> 
    <Link to ='/flashcards/colors'> <button className={s.button}>colors</button></Link>
    <Link to ='/flashcards/family'><button className={s.button}>family</button></Link>
    <Link to ='/flashcards/greetings'><button className={s.button}>greetings</button></Link>
    <Link to ='/flashcards/farevels'><button className={s.button}>farevels</button></Link>
    <Link to ='/flashcards/numbers'><button className={s.button}>numbers</button></Link>
    </div>
    <div className={s.cards}> 
    
    </div>
    </div>
  )
}

export default FlashCardsChoice
//мне нужен компоненрть который будет шаблоном для создания флеш карточек
//нужно чтото где будут храняиться флеш карточки массив
//осуществиать возмодность выбора какие флеш карточки выбрать типо тематика фрукты овощи
//нужен массив массивов который котрый бдут хранить слова и еще как то карточку надо анимировать..

