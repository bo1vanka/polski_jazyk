import React from 'react'
import { useParams } from 'react-router-dom'

const FlashCards = () => {
    const {theme} = useParams();
    const themes = ['colors'];
  return (
    <div>
      <h1>Theme: {theme}</h1>
    </div>
  )
}

export default FlashCards
