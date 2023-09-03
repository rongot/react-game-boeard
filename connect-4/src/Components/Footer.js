import React from 'react'
import '../css/Game.css'


const Footer = ({onClickEvent}) => {
  return (
    <div className='pannel footer'>
        <button onClick={onClickEvent}>new Game</button>
      
    </div>
  )
}

export default Footer