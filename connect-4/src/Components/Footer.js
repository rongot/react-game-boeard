import React from 'react'
import '../css/Game.css'
import { GAME_STATE_PLAYING } from '../Helper/constant'


const Footer = ({onNewGameClick,onSuggestClick,gameState}) => {
  const renderButton=()=>{
    if( gameState === GAME_STATE_PLAYING){
      return <button onClick={onSuggestClick}>Suggest</button>
    }
    return <button onClick={onNewGameClick}>new Game</button>
    
  }
  return (
    <div className='pannel footer'>
      {
        renderButton()
      }
        
       
      </div>
     
     
  )
}

export default Footer

//{
//   gameState === GAME_STATE_PLAYING &&
//   <button onClick={onSuggestClick}>Suggest</button>

// }
// {
//   gameState !== GAME_STATE_PLAYING &&
//   <button onClick={onNewGameClick}>new Game</button>
// }