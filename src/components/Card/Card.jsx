import React from 'react'
import s from './Card.module.scss'
const Card = (props) => {
  return (
    <div className={s.container}>
      <h1> {props.name}</h1>
    </div>
  )
}

export default Card
