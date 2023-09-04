import React from 'react'
import '../css/Game.css'


const Footer = ({onNewGameClick,onSuggestClick}) => {
  return (
    <div className='pannel footer'>
        <button onClick={onNewGameClick}>new Game</button>
        <button onClick={onSuggestClick}>Suggest</button>
      </div>
     
     
  )
}

export default Footer